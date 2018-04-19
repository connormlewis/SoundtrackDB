from app import app
import os
import sched, time
from app.blueprints.routes import get_commits, get_issues, lock

event = None


def get_git_data():
    global event
    lock.acquire()
    get_commits()
    get_issues()
    lock.release()
    event.enter(3600, 1, get_git_data, ())


if __name__ == "__main__":
    db_url = 'postgresql://' + \
             os.getenv('POSTGRES_USER') + ':' + \
             os.getenv('POSTGRES_PASSWORD') + '@' + \
             os.getenv('POSTGRES_URL') + '/' + \
             os.getenv('POSTGRES_DB')

    soundtrackdb = app.create_app()
    app.register_routes(soundtrackdb)
    app.connect_db(db_url, True)
    event = sched.scheduler(time.time, time.sleep)
    get_git_data()
    soundtrackdb.run(host="0.0.0.0", debug=True, port=80)
