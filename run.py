from flask import Flask, render_template, abort

app = Flask('SoundtrackDB')


@app.route('/')
def get_home():
    return render_template('home.html')


@app.route('/artist')
def get_artists():
    return render_template('model-list.html')


@app.route('/artist/<artist_name>')
def get_artist(artist_name: str):
    return render_template('model-artist.html')


@app.route('/album')
def get_albums():
    return render_template('model-list.html')


@app.route('/album/<album_name>')
def get_album(album_name: str):
    return render_template('model-album.html')


@app.route('/tv-movie')
def get_media():
    return render_template('model-list.html')


@app.route('/tv-movie/<media_name>')
def get_single_media(media_name: str):
    return render_template('model-movie-tv.html')


@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404


if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True, port=80)