"""Application routes"""
import json
import os

import requests
from flask import Blueprint, abort, jsonify, request

from app.models import Artist, ArtistSchema, MediaSchema, Album, AlbumSchema
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

        return jsonify(albums_schema.dump(albums, many=True).data)
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
    media = ['riverdale', 'interstellar', 'e_t']
    media_data = []
    related_data = json.load(open('static/instances/related_info.json'))
    for media_name in media:
        new_media = {}
        model_data = json.load(open('static/instances/show_' + media_name + '.json'))
        cast_data = json.load(open('static/instances/cast_' + media_name + '.json'))
        video_data = json.load(open('static/instances/video_' + media_name + '.json'))
        image_data = json.load(open('static/instances/images_' + media_name + '.json'))
        media_url = 'http://image.tmdb.org/t/p/w500/'
        if 'seasons' in model_data:
            new_media['name'] = model_data['name']
            new_media['type'] = 'show'
            first = int(model_data['first_air_date'][0:4])
            last = int(model_data['last_air_date'][0:4])
            new_media['years'] = [year for year in range(first, last+1)]
            new_media['seasons'] = len(model_data['seasons'])
            new_media['running'] = (model_data['status'] == 'Returning Series')
        else:
            new_media['name'] = model_data['title']
            new_media['type'] = 'movie'
            new_media['years'] = model_data['release_date'][0:4]
            new_media['season'] = 'None'
            new_media['running'] = 'None'
        #Set data that doesn't change based on type
        new_media['genres'] = [genre['name'] for genre in model_data['genres']]
        new_media['overview'] = model_data['overview']
        new_media['cast'] = [member['name'] for member in cast_data['cast']]
        new_media['poster'] = media_url + model_data['poster_path']
        new_media['video'] = video_data['results'][0]
        new_media['backdrops'] = [media_url+image['file_path'] for image in image_data['backdrops']]
        album = related_data['media'][media_name]['album']
        artist = related_data['media'][media_name]['artist']
        new_media['albums'] = [album['link'][7:]]
        new_media['artists'] = [artist['link'][8:]]
        new_media['id'] = media_name
        media_data.append(new_media)
    return jsonify(media_data)


@BP.route('/tv-movie/<media_name>')
def get_single_media(media_name: str):
    """Get a specific tv-movie instance"""
    if media_name not in ['riverdale', 'interstellar', 'e_t']:
        abort(404)
    #Load data
    related_data = json.load(open('static/instances/related_info.json'))
    model_data = json.load(open('static/instances/show_' + media_name + '.json'))
    cast_data = json.load(open('static/instances/cast_' + media_name + '.json'))
    video_data = json.load(open('static/instances/video_' + media_name + '.json'))
    image_data = json.load(open('static/instances/images_' + media_name + '.json'))
    media_url = 'http://image.tmdb.org/t/p/w500/'
    new_media = {}
    #Set data based on type
    if 'seasons' in model_data:
        new_media['name'] = model_data['name']
        new_media['type'] = 'show'
        first = int(model_data['first_air_date'][0:4])
        last = int(model_data['last_air_date'][0:4])
        new_media['years'] = [year for year in range(first, last+1)]
        new_media['seasons'] = len(model_data['seasons'])
        new_media['running'] = (model_data['status'] == 'Returning Series')
    else:
        new_media['name'] = model_data['title']
        new_media['type'] = 'movie'
        new_media['years'] = model_data['release_date'][0:4]
        new_media['season'] = 'None'
        new_media['running'] = 'None'
    #Set data that doesn't change based on type
    new_media['genres'] = [genre['name'] for genre in model_data['genres']]
    new_media['overview'] = model_data['overview']
    new_media['cast'] = [member['name'] for member in cast_data['cast']]
    new_media['poster'] = media_url + model_data['poster_path']
    new_media['video'] = video_data['results'][0]
    new_media['backdrops'] = [media_url + image['file_path'] for image in image_data['backdrops']]
    album = related_data['media'][media_name]['album']['link'][7:]
    artist = related_data['media'][media_name]['artist']['link'][8:]
    new_media['albums'] = (album, related_data['media'][media_name]['album']['name'])
    new_media['artists'] = (artist, related_data['media'][media_name]['artist']['name'])
    new_media['id'] = media_name
    return jsonify(new_media)

def get_commits():
    """
    Get commits from github
    """
    all_commits = 0
    team = {'stevex196x':0, 'TheSchaft':0, 'melxtru':0, \
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
        #TODO parse through the pagination using the request headers 
        url = 'https://api.github.com/repos/connormlewis/idb/issues?state=all&filter=all&per_page=100'
        data = requests.get(url, headers={'Authorization': 'token ' + os.environ['API_TOKEN']})
        json_list = data.json()
        for entry in json_list:
            if 'pull_request' not in entry:
                team[entry['user']['login']] += 1
                all_issues += 1
    except TypeError:
        return (team, all_issues)
    return (team, all_issues)
