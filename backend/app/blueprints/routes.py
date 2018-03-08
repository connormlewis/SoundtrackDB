"""Application routes"""
import json

from flask import Blueprint, abort, jsonify

BP = Blueprint('category_routes', 'SoundtrackDB')

#Clean up
@BP.route('/')
def get_home():
    """Get the home page"""
    return jsonify({'response': 'success'})

#Clean up
@BP.route('/artist')
def get_artists():
    """Get all of the artists"""
    artists = ['hans_zimmer', 'blake_neely', 'john_williams']
    artist_data = []
    related_data = json.load(open('static/instances/related_info.json'))
    counter = 0
    for artist in artists:
        spotify_data = json.load(open('static/instances/artist_' + artist+ '.json'))
        lastfm_data = json.load(open('static/instances/last_fm_artist_' + artist + '.json'))
        new_artist = {}
        new_artist['name'] = spotify_data['name']
        new_artist['albums'] = [related_data['artists'][artist]['album']['name']]
        new_artist['biography'] = lastfm_data['artist']['bio']['content']
        new_artist['movies-tv_shows'] = [related_data['artists'][artist]['media']['name']]
        new_artist['img'] = spotify_data['images'][0]['url']
        new_artist['followers'] = spotify_data['followers']['total']
        new_artist['id'] = artist
        artist_data.append(new_artist)
        counter += 1
    return jsonify(artist_data)

#Clean up
@BP.route('/artist/<artist_name>')
def get_artist(artist_name: str):
    """Get a specific artist"""
    if artist_name not in ['hans_zimmer', 'blake_neely', 'john_williams']:
        abort(404)

    new_artist = {}
    related_data = json.load(open('static/instances/related_info.json'))
    spotify_data = json.load(open('static/instances/artist_' + artist_name + '.json'))
    lastfm_data = json.load(open('static/instances/last_fm_artist_' + artist_name + '.json'))
    new_artist['related_data'] = related_data
    new_artist['spotify_data'] = spotify_data
    new_artist['lastfm_data'] = lastfm_data
    return jsonify(new_artist)

#Clean up
@BP.route('/album')
def get_albums():
    """Get all of the albums"""
    albums = ['riverdale', 'interstellar', 'e_t']
    albums_data = []
    related_data = json.load(open('static/instances/related_info.json'))
    counter = 0
    for album in albums:
        loaded_data = json.load(open('static/instances/album_' + album + '.json'))
        track_data = json.load(open('static/instances/track_' + album + '.json'))
        new_album = {}
        new_album['name'] = loaded_data['name']
        new_album['track_list'] = []
        new_album['artists'] = [related_data['albums'][album]['artist']['name']]
        for track in track_data['tracks']:
            new_album['track_list'].append(track['name'])
        new_album['year'] = loaded_data['release_date'][0:4]
        new_album['label'] = loaded_data['label']
        new_album['img'] = loaded_data['images'][0]['url']
        new_album['movies-tv_show'] = [related_data['albums'][album]['media']['name']]
        new_album['id'] = album
        albums_data.append(new_album)
        counter += 1
    return jsonify(albums_data)

#Clean up
@BP.route('/album/<album_name>')
def get_album(album_name: str):
    """Get a specific album"""
    if album_name not in ['riverdale', 'interstellar', 'e_t']:
        abort(404)
    related_data = json.load(open('static/instances/related_info.json'))
    model_data = json.load(open('static/instances/album_' + album_name + '.json'))
    track_data = json.load(open('static/instances/track_' + album_name + '.json'))
    new_album = {}
    new_album['related_data'] = related_data
    new_album['model_data'] = model_data
    new_album['track_data'] = track_data
    return jsonify(new_album)

#Clean up
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
        new_media['backdrops'] = [media_url + image['file_path'] for image in image_data['backdrops']]
        new_media['albums'] = [related_data['media'][media_name]['album']['list'][7:]]
        new_media['artists'] = [related_data['media'][media_name]['artist']['list'][8:]]
        new_media['id'] = media_name
        media_data.append(new_media)
    
    return jsonify(media_data)

#Clean up
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
    new_media['albums'] = (related_data['media'][media_name]['album']['link'][7:], related_data['media'][media_name]['album']['name'])
    new_media['artists'] = (related_data['media'][media_name]['artist']['link'][8:], related_data['media'][media_name]['artist']['name'])
    new_media['id'] = media_name
    for x in range(0, 5):
    #comment again
    return jsonify(new_media)
