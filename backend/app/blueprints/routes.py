"""Application routes"""
import requests
from flask import Blueprint, jsonify, request

from app.models import Artist, ArtistSchema, MediaSchema, Album, AlbumSchema, Media
from app.shared.db import get_session

BP = Blueprint('category_routes', 'SoundtrackDB')

artist_schema = ArtistSchema()
album_schema = AlbumSchema()
media_schema = MediaSchema()
artists_schema = ArtistSchema(exclude=('albums', 'media'))
albums_schema = AlbumSchema(exclude=('artists', 'media', 'tracks'))
medias_schema = MediaSchema(exclude=('albums', 'artists'))


@BP.route('/about')
def get_about():
    """Get commits and data"""
    commits = get_commits()
    about_data = {}
    about_data['commits'] = commits[0]
    about_data['total_commits'] = commits[1]
    issues = get_issues()
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
            query = query.limit(12)

        artists = query.all()
        return jsonify(artists_schema.dump(artists, many=True).data)
    finally:
        session.close()


@BP.route('/artist/<artist_id>')
def get_artist(artist_id: int):
    """Get a specific artist"""
    session = get_session()
    try:
        query = session.query(Artist).get(artist_id)
        return jsonify(artist_schema.dump(query).data)
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
            query = query.limit(12)

        albums = query.all()

        return jsonify(albums_schema.dumps(albums, many=True).data)
    finally:
        session.close()


@BP.route('/album/<album_id>')
def get_album(album_id: id):
    """Get a specific album"""
    session = get_session()
    try:
        query = session.query(Album).get(album_id)
        return jsonify(album_schema.dump(query).data)
    finally:
        session.close()


@BP.route('/tv-movie')
def get_media():
    """Get all of the tv-movies"""
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
            query = query.limit(12)

        medias = query.all()

        count = query.count()
        return jsonify({
            'items': medias_schema.dump(medias, many=True).data,
            'count': count
        })
    finally:
        session.close()

@BP.route('/tv-movie/<media_id>')
def get_single_media(media_id: int):
    """Get a specific tv-movie instance"""
    session = get_session()
    try:
        query = session.query(Media).get(media_id)
        return jsonify(media_schema.dump(query).data)
    finally:
        session.close()

def get_commits():
    """
    Get commits from github
    """
    all_commits = 0
    team = {'stevex196x':0, 'TheSchaft':0, 'melxtru':0, \
                'aylish19':0, 'connormlewis':0, 'tsukkisuki':0}
    try:
        url = 'https://api.github.com/repos/connormlewis/idb/stats/contributors'
        data = requests.get(url)#, headers={'Authorization': 'token ' + os.environ['API_TOKEN']})
        json_list = data.json()
        for entry in json_list:
            total = entry['total']
            user_name = entry['author']['login']
            team[user_name] = total
            all_commits += total
    except TypeError:
        return (team, all_commits)
    return (team, all_commits)

def get_issues():
    """
    Get issues from github
    """
    team = {'stevex196x':0, 'TheSchaft':0, 'melxtru':0, \
                 'aylish19':0, 'connormlewis':0, 'tsukkisuki':0}
    all_issues = 0
    try:
        url = 'https://api.github.com/repos/connormlewis/idb/issues?state=all&filter=all'
        data = requests.get(url)#, headers={'Authorization': 'token ' + os.environ['API_TOKEN']})
        json_list = data.json()
        for entry in json_list:
            if 'pull_request' not in entry:
                team[entry['user']['login']] += 1
                all_issues += 1
    except TypeError:
        return (team, all_issues)
    return (team, all_issues)
