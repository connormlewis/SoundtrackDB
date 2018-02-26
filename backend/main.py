from app import app

if __name__ == "__main__":
    soundtrackdb = app.create_app()
    app.register_routes(soundtrackdb)
    soundtrackdb.run(host="0.0.0.0", debug=True, port=80)
