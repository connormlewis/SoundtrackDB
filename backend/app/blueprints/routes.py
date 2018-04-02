"""Application routes"""
import os
from datetime import datetime, timedelta

import requests
from flask import Blueprint, jsonify, request, abort

from sqlalchemy import or_, Text, cast
from app.models import Artist, ArtistSchema, MediaSchema, Album, AlbumSchema, Media
from app.models.associations import search
from app.shared.db import get_session

BP = Blueprint('category_routes', 'SoundtrackDB')

artist_schema = ArtistSchema()
album_schema = AlbumSchema()
media_schema = MediaSchema()
artists_schema = ArtistSchema(exclude=('albums', 'media'))
albums_schema = AlbumSchema(exclude=('artists', 'media', 'tracks'))
medias_schema = MediaSchema(exclude=('albums', 'artists', 'cast', 'other_images', 'videos'))

commit_data = None
issue_data = None
updated_at = None


@BP.route('/about')
def get_about():
    """Get commits and data"""
    global updated_at, commit_data, issue_data

    last_hour_date_time = datetime.now() - timedelta(hours=1)
    if updated_at is None or updated_at < last_hour_date_time:
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

        query = query.order_by('name')
        if request.args.get('limit') is not None:
            query = query.limit(int(request.args.get('limit')))
        else:
            query = query.limit(12)

        if request.args.get('offset') is not None:
            query = query.offset(int(request.args.get('offset')))
        else:
            query = query.offset(0)

        artists = query.all()
        count = session.query(Artist).count()
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

        query = query.order_by('name')

        if request.args.get('limit') is not None:
            query = query.limit(int(request.args.get('limit')))
        else:
            query = query.limit(12)

        if request.args.get('offset') is not None:
            query = query.offset(int(request.args.get('offset')))
        else:
            query = query.offset(0)

        albums = query.all()
        count = session.query(Album).count()
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

        query = query.order_by('name')
        if request.args.get('limit') is not None:
            query = query.limit(int(request.args.get('limit')))
        else:
            query = query.limit(12)

        if request.args.get('offset') is not None:
            query = query.offset(int(request.args.get('offset')))
        else:
            query = query.offset(0)

        medias = query.all()

        count = session.query(Media).count()
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
        search_statement = or_(search.c.name.ilike('%'+term+'%'),
                               search.c.about.ilike('%'+term+'%'),
                               search.c.kind.ilike('%'+term+'%'),
                               search.c.image.ilike('%'+term+'%'),
                               cast(search.c.id, Text).ilike('%'+term+'%'),
                               search.c.release_date.ilike('%'+term+'%'))
        query = session.query(search).filter(search_statement)
        if request.args.get('limit') is not None:
            query = query.limit(int(request.args.get('limit')))
        else:
            query = query.limit(12)

        if request.args.get('offset') is not None:
            query = query.offset(int(request.args.get('offset')))
        else:
            query = query.offset(0)

        data = query.all()
        count = session.query(search).filter(search_statement).count()
        data = [tuple(tup) for tup in data]
        return jsonify({
            'items': data,
            'count': count
        })
    finally:
        session.close()


def get_commits(): # pragma: no cover
    """
    Get commits from github
    """
    all_commits = 0
    team = {'stevex196x':0, 'TheSchaft':0, 'melxtru':0,
            'aylish19':0, 'connormlewis':0, 'tsukkisuki':0}
    try:
        url = 'https://api.github.com/repos/connormlewis/idb/stats/contributors'
        data = requests.get(url, headers={'Authorization': 'token ' + os.environ['API_TOKEN']})
        json_list = data.json()
        for entry in json_list:
            total = entry['total']
            user_name = entry['author']['login']
            team[user_name] = total
            all_commits += total
    finally:
        return team, all_commits


def get_issues(): # pragma: no cover
    """
    Get issues from github
    """
    team = {'stevex196x':0, 'TheSchaft':0, 'melxtru':0,
            'aylish19':0, 'connormlewis':0, 'tsukkisuki':0}
    all_issues = 0
    try:
        url = ('https://api.github.com/repos/connormlewis/idb/'
               'issues?state=all&filter=all&per_page=100')
        data = requests.get(url, headers={'Authorization': 'token ' + os.environ['API_TOKEN']})
        json_list = data.json()
        for entry in json_list:
            if 'pull_request' not in entry:
                team[entry['user']['login']] += 1
                all_issues += 1
    finally:
        return team, all_issues
