"""Application routes"""
import os
from datetime import datetime, timedelta

import re
import requests
from flask import Blueprint, jsonify, request, abort

from sqlalchemy import or_, Text, cast, asc, desc
from app.models import Artist, ArtistSchema, MediaSchema, Album, AlbumSchema, Media, \
    search, SearchSchema
from app.shared.db import get_session

BP = Blueprint('category_routes', 'SoundtrackDB')

artist_schema = ArtistSchema()
album_schema = AlbumSchema()
media_schema = MediaSchema()
search_schema = SearchSchema()
artists_schema = ArtistSchema(exclude=('albums', 'media'))
albums_schema = AlbumSchema(exclude=('artists', 'media', 'tracks'))
medias_schema = MediaSchema(
    exclude=(
        'albums',
        'artists',
        'cast',
        'other_images',
        'videos'))
search_schema = SearchSchema(many=True)

commit_data = None
issue_data = None
updated_at = None
#Blessed

@BP.route('/about')
def get_about():
    """Get commits and data"""
    global updated_at, commit_data, issue_data

    last_hour_date_time = datetime.now() - timedelta(hours=1)
    while ((updated_at is None or updated_at < last_hour_date_time) and
           (commit_data is None or commit_data[1] == 0) and
           (issue_data is None or issue_data[1] == 0)):
        commit_data = get_commits()
        issue_data = get_issues()
        updated_at = datetime.now()

    commits = commit_data
    issues = issue_data

    about_data = {}
    about_data['commits'] = commits[0]
    about_data['total_commits'] = commits[1]
    about_data['issues'] = issues[0]
    about_data['total_issues'] = issues[1]
    return jsonify(about_data)


@BP.route('/artist')
def get_artists():
    """Get all of the artists"""
    session = get_session()

    try:
        query = session.query(Artist)
        if request.args.get('search') is not None:
            query = artist_search(query, request.args.get('search'))
        query = order_query(Artist.__table__, request.args, query)
        query = artist_filter(request.args, query)
        final_query = query

        if request.args.get('limit') is not None:
            query = query.limit(int(request.args.get('limit')))
        else:
            query = query.limit(12)

        if request.args.get('offset') is not None:
            query = query.offset(int(request.args.get('offset')))
        else:
            query = query.offset(0)

        artists = query.all()
        count = final_query.count()
        return jsonify({
            'items': artists_schema.dump(artists, many=True).data,
            'count': count
        })
    finally:
        session.close()


@BP.route('/artist/<artist_id>')
def get_artist(artist_id):
    """Get a specific artist"""
    session = get_session()
    try:
        artist_id = int(artist_id)
        artist = session.query(Artist).get(artist_id)

        if artist is None:
            return abort(404)

        return jsonify(artist_schema.dump(artist).data)
    except ValueError:
        return abort(404)
    finally:
        session.close()


@BP.route('/album')
def get_albums():
    """Get all of the albums"""
    session = get_session()

    try:
        query = session.query(Album)
        if request.args.get('search') is not None:
            query = album_search(query, request.args.get('search'))
        query = order_query(Album.__table__, request.args, query)
        query = album_filter(request.args, query)
        final_query = query

        if request.args.get('limit') is not None:
            query = query.limit(int(request.args.get('limit')))
        else:
            query = query.limit(12)

        if request.args.get('offset') is not None:
            query = query.offset(int(request.args.get('offset')))
        else:
            query = query.offset(0)

        albums = query.all()
        count = final_query.count()
        return jsonify({
            'items': albums_schema.dump(albums, many=True).data,
            'count': count
        })
    finally:
        session.close()


@BP.route('/album/<album_id>')
def get_album(album_id):
    """Get a specific album"""
    session = get_session()
    try:
        album_id = int(album_id)
        album = session.query(Album).get(album_id)

        if album is None:
            return abort(404)

        return jsonify(album_schema.dump(album).data)
    except ValueError:
        return abort(404)
    finally:
        session.close()


@BP.route('/media')
def get_media():
    """Get all media"""
    session = get_session()
    try:
        query = session.query(Media)
        if request.args.get('search') is not None:
            query = media_search(query, request.args.get('search'))
        query = order_query(Media.__table__, request.args, query)
        query = media_filter(request.args, query)
        final_query = query

        if request.args.get('limit') is not None:
            query = query.limit(int(request.args.get('limit')))
        else:
            query = query.limit(12)

        if request.args.get('offset') is not None:
            query = query.offset(int(request.args.get('offset')))
        else:
            query = query.offset(0)

        medias = query.all()

        count = final_query.count()
        return jsonify({
            'items': medias_schema.dump(medias, many=True).data,
            'count': count
        })
    finally:
        session.close()


@BP.route('/media/<media_id>')
def get_single_media(media_id):
    """Get a specific media instance"""
    session = get_session()
    try:
        media_id = int(media_id)
        media = session.query(Media).get(media_id)

        if media is None:
            return abort(404)

        return jsonify(media_schema.dump(media).data)
    except ValueError:
        return abort(404)
    finally:
        session.close()


@BP.route('/search/<term>')
def search_db(term):
    """
    Search database for a term
    """
    session = get_session()
    try:
        search_statement = or_(search.c.name.ilike('%' + term + '%'),
                               search.c.about.ilike('%' + term + '%'),
                               search.c.kind.ilike('%' + term + '%'),
                               search.c.image.ilike('%' + term + '%'),
                               cast(search.c.id, Text).ilike('%' + term + '%'),
                               search.c.release_date.ilike('%' + term + '%'))
        query = session.query(search).filter(search_statement)
        query = order_query(search, request.args, query)
        final_query = query

        if request.args.get('limit') is not None:
            query = query.limit(int(request.args.get('limit')))
        else:
            query = query.limit(12)

        if request.args.get('offset') is not None:
            query = query.offset(int(request.args.get('offset')))
        else:
            query = query.offset(0)

        data = query.all()
        count = final_query.count()
        return jsonify({
            'items': search_schema.dump(data, many=True).data,
            'count': count
        })
    finally:
        session.close()


def get_commits():  # pragma: no cover
    """
    Get commits from github
    """
    all_commits = 0
    team = {'stevex196x': 0, 'TheSchaft': 0, 'melxtru': 0,
            'aylish19': 0, 'connormlewis': 0, 'tsukkisuki': 0}
    try:
        url = 'https://api.github.com/repos/connormlewis/idb/stats/contributors'
        data = requests.get(
            url, headers={
                'Authorization': 'token ' + os.environ['API_TOKEN']})
        json_list = data.json()
        for entry in json_list:
            total = entry['total']
            user_name = entry['author']['login']
            team[user_name] = total
            all_commits += total
    finally:
        return team, all_commits


def get_issues():  # pragma: no cover
    """
    Get issues from github
    """
    team = {'stevex196x': 0, 'TheSchaft': 0, 'melxtru': 0,
            'aylish19': 0, 'connormlewis': 0, 'tsukkisuki': 0}
    all_issues = 0
    try:
        url = ('https://api.github.com/repos/connormlewis/idb/'
               'issues?state=all&filter=all&per_page=100')
        data = requests.get(
            url, headers={
                'Authorization': 'token ' + os.environ['API_TOKEN']})
        link = data.headers.get('Link', None)
        if link is not None:
            parse_words = list(re.split('; |, | ', link))
            index = parse_words.index('rel="last"') - 1
            temp_string = parse_words[index][:-1]
            last_page = re.split('page=', temp_string)[-1]
            for i in range(1, int(last_page) + 1):
                url = (
                    'https://api.github.com/repos/connormlewis/idb/'
                    'issues?state=all&filter=all&per_page=100' +
                    '&page=' +
                    str(i))
                data = requests.get(
                    url, headers={
                        'Authorization': 'token ' + os.environ['API_TOKEN']})
                json_list = data.json()
                for entry in json_list:
                    if 'pull_request' not in entry:
                        team[entry['user']['login']] += 1
                        all_issues += 1
    finally:
        return team, all_issues

def order_query(table, query_params, query):
    #if query_params.get('select_only') is not None:
    #    query = query.filter(query_params.get('select_only'))
    if query_params.get('order_by') is not None:
        val = query_params.get('order_by')
        if val in table.c:
            if 'asc' in request.args:
                query = query.order_by(asc(val))
            elif 'desc' in request.args:
                query = query.order_by(desc(val))
            else:
                query = query.order_by(val)
    else:
        query = query.order_by(asc('name'))
    return query

def artist_filter(query_params, query):
    if 'followers' in query_params:
        query = query.filter(query_params.get('followers'))
    return query

def album_filter(query_params, query):
    if 'release_date' in query_params:
        query = query.filter(query_params.get('release_date'))
    return query

def media_filter(query_params, query):
    if 'type' in query_params:
        if query_params.get('type') == 'Movie':
            query = query.filter(Media.c.type == 1)
        else:
            query = query.filter(Media.c.type == 0)
    if 'release_date' in query_params:
        query = query.filter(query_params.get('release_date'))
    if 'running' in query_params:
        query = query.filter(query_params.get('running'))
    return query

def artist_search(query, term):
    id = Column(Integer, primary_key=True)
    name = Column(Text, nullable=False)
    bio = Column(Text)
    image = Column(Text)
    followers = Column(Integer)
    spotify_uri = Column(Text, nullable=False)
    search_statement = or_(cast(Artist.c.id, Text).ilike('%'+term+'%'), #convert
                           Artist.c.name.ilike('%'+term+'%'),
                           Artist.c.bio.ilike('%'+term+'%'),
                           Artist.c.image.ilike('%'+term+'%'),
                           cast(Artist.c.followers, Text).ilike('%'+term+'%'), #convert
                           Artist.c.spotify_uri.ilike('%'+term+'%'))
    return query.filter(search_statement)

def media_search(query, term):
    search_statement = or_(cast(Media.c.id, Text).ilike('%'+term+'%'), #convert
                           cast(Media.c.type, Text).ilike('%'+term+'%'), #convert
                           Media.c.name.ilike('%'+term+'%'),
                           Media.c.cast.ilike('%'+term+'%'),
                           Media.c.genres.ilike('%'+term+'%'),
                           Media.c.seasons.ilike('%'+term+'%'),
                           Media.c.release_date.ilike('%'+term+'%'),
                           Media.c.last_aired.ilike('%'+term+'%'),
                           Media.c.image.ilike('%'+term+'%'),
                           Media.c.running.ilike('%'+term+'%'),
                           Media.c.overview.ilike('%'+term+'%'),
                           Media.c.other_images.ilike('%'+term+'%'),
                           Media.c.video.ilike('%'+term+'%'),
                           cast(Media.c.imdb_id, Text).ilike('%'+term+'%'), #convert
                           cast(Media.c.tmdb_id, Text).ilike('%'+term+'%'), #convert
                           cast(Media.c.runtime, Text).ilike('%'+term+'%'), #convert
                           Media.c.tagline.ilike('%'+term+'%'),
                           cast(Media.c.popularity, Text).ilike('%'+term+'%'), #convert
                           cast(Media.c.average_rating, Text).ilike('%'+term+'%')) #convert
    return query.filter(search_statement)

def album_search(query, term):
    search_statement = or_(Album.c.name.ilike('%'+term+'%'),
                           Album.c.release_date.ilike('%'+term+'%'),
                           Album.c.genres.ilike('%'+term+'%'),
                           Album.c.image.ilike('%'+term+'%'),
                           Album.c.label.ilike('%'+term+'%'),
                           Album.c.tracks.ilike('%'+term+'%'),
                           Album.c.spotify_uri.ilike('%'+term+'%'),
                           cast(Album.c.id, Text).ilike('%'+term+'%'))
    return query.filter(search_statement)
         