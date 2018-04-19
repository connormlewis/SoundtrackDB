from app import app
import os


if __name__ == "__main__":
    db_url = 'postgresql://' + \
             os.getenv('POSTGRES_USER') + ':' + \
             os.getenv('POSTGRES_PASSWORD') + '@' + \
             os.getenv('POSTGRES_URL') + '/' + \
             os.getenv('POSTGRES_DB')

    soundtrackdb = app.create_app()
    app.register_routes(soundtrackdb)
    app.connect_db(db_url, True)
    soundtrackdb.run(host="0.0.0.0", debug=True, port=80)
