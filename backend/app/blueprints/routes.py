"""Application routes"""
import json

from flask import Blueprint, abort

BP = Blueprint('category_routes', 'SoundtrackDB')

#Clean up
@BP.route('/')
def get_home():
    """Get the home page"""
    return json.dumps({'response': 'success'})

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
        new_artist['db_id'] = counter
        new_artist['movies-tv_shows'] = [related_data['artists'][artist]['media']['name']]
        new_artist['img'] = spotify_data['images'][0]['url']
        new_artist['followers'] = spotify_data['followers']['total']
        artist_data.append(new_artist)
        counter += 1
    return json.dumps(artist_data)

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
    return json.dumps(new_artist)

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
        new_album['year'] = loaded_data['release_date']
        new_album['label'] = loaded_data['label']
        new_album['img'] = loaded_data['images'][0]['url']
        new_album['movies-tv_show'] = [related_data['albums'][album]['media']['name']]
        new_album['id'] = counter
        albums_data.append(new_album)
        counter += 1
    return json.dumps(albums_data)

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
    return json.dumps(new_album)

#Clean up
@BP.route('/tv-movie')
def get_media():
    """Get all of the tv-movies"""
    movies = ['riverdale', 'interstellar', 'e_t']
    movies_data = []
    counter = 0
    related_data = json.load(open('static/instances/related_info.json'))
    for movie in movies:
        new_movie = {}
        loaded_data = json.load(open('static/instances/show_' + movie + '.json'))
        cast_data = json.load(open('static/instances/cast_' + movie + '.json'))
        if 'seasons' in loaded_data:
            new_movie['type'] = 0
            new_movie['name'] = loaded_data['name']
            new_movie['years'] = []
            for season in loaded_data['seasons']:
                new_movie['years'].append(season['air_date'])
            new_movie['seasons'] = len(loaded_data['seasons'])
        else:
            new_movie['name'] = loaded_data['title']
            new_movie['years'] = [loaded_data['release_date']]
            new_movie['type'] = 1
            new_movie['seasons'] = 0
        new_movie['albums'] = [related_data['media'][movie]['album']['name']]
        new_movie['artists'] = [related_data['media'][movie]['artist']['name']]
        new_movie['description'] = loaded_data['overview']
        new_movie['cast'] = []
        for member in cast_data['cast']:
            new_movie['cast'].append(member['name'])
        new_movie['genres'] = []
        for genre in loaded_data['genres']:
            new_movie['genres'].append(genre['name'])
        new_movie['id'] = counter
        movies_data.append(new_movie)
        counter += 1
    return json.dumps(movies_data)

#Clean up
@BP.route('/tv-movie/<media_name>')
def get_single_media(media_name: str):
    """Get a specific tv-movie instance"""
    if media_name not in ['riverdale', 'interstellar', 'e_t']:
        abort(404)

    related_data = json.load(open('static/instances/related_info.json'))
    model_data = json.load(open('static/instances/show_' + media_name + '.json'))
    cast_data = json.load(open('static/instances/cast_' + media_name + '.json'))
    video_data = json.load(open('static/instances/video_' + media_name + '.json'))
    image_data = json.load(open('static/instances/images_' + media_name + '.json'))
    new_movie = {}
    new_movie['related_data'] = related_data
    new_movie['model_data'] = model_data
    new_movie['cast_data'] = cast_data
    new_movie['video_data'] = video_data
    new_movie['image_data'] = image_data
    return json.dumps(new_movie)
