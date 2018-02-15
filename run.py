import json
from flask import Flask, render_template, abort

app = Flask('SoundtrackDB')


@app.route('/')
def get_home():
    return render_template('home.html')


@app.route('/artist')
def get_artists():
    artists = ['hans_zimmer', 'blake_neely', 'john_williams']
    artist_data = []
    for artist in artists:
        loaded_data = json.load(open('static/instances/artist_' + artist + '.json'))
        loaded_data['linkUrl'] = '/artist/' + artist
        artist_data.append(loaded_data)
    return render_template('model-list-artists.html', artist_data=artist_data)


@app.route('/artist/<artist_name>')
def get_artist(artist_name: str):
    if artist_name not in ['hans_zimmer', 'blake_neely', 'john_williams']:
        abort(404)

    spotify_data = json.load(open('static/instances/artist_' + artist_name + '.json'))
    lastfm_data = json.load(open('static/instances/last_fm_artist_' + artist_name + '.json'))

    return render_template('model-artist.html', lastfm=lastfm_data, spotify=spotify_data)


@app.route('/album')
def get_albums():
    albums = ['riverdale', 'interstellar', 'e_t']
    albums_data = []
    for album in albums:
        loaded_data = json.load(open('static/instances/album_' + album + '.json'))
        loaded_data['linkUrl'] = '/album/' + album
        albums_data.append(loaded_data)
    return render_template('model-list-albums.html', albums_data=albums_data)


@app.route('/album/<album_name>')
def get_album(album_name: str):

    if album_name not in ['riverdale', 'interstellar', 'e_t']:
        abort(404)
    content_data = json.load(open('static/instances/album_' + album_name + '.json'))
    track_data = json.load(open('static/instances/track_' + album_name + '.json'))

    return render_template('model-album.html', content=content_data, track=track_data)


@app.route('/tv-movie')
def get_media():
    movies = ['riverdale', 'interstellar', 'e_t']
    movies_data = []
    for movie in movies:
        loaded_data = json.load(open('static/instances/show_' + movie + '.json'))
        loaded_data['linkUrl'] = '/tv-movie/' + movie
        if 'title' in loaded_data:
            loaded_data['yearText'] = loaded_data['release_date'][:4]
        else:
            loaded_data['yearText'] = loaded_data['first_air_date'][:4] + ' • ' + str(len(loaded_data['seasons'])) + ' Seasons'
        movies_data.append(loaded_data)
    return render_template('model-list-movies.html', movies_data=movies_data)


@app.route('/tv-movie/<media_name>')
def get_single_media(media_name: str):
    if media_name not in ['riverdale', 'interstellar', 'e_t']:
        abort(404)

    content_data = json.load(open('static/instances/show_' + media_name + '.json'))
    cast_data = json.load(open('static/instances/cast_' + media_name + '.json'))
    video_data = json.load(open('static/instances/video_' + media_name + '.json'))
    image_data = json.load(open('static/instances/images_' + media_name + '.json'))

    return render_template('model-movie-tv.html', content=content_data, cast=cast_data, video=video_data, images=image_data)


@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404


if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True, port=80)