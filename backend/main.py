from app import app

if __name__ == "__main__":
    new_app = app.create_app()
    app.register_routes(new_app)
    new_app.run(host="0.0.0.0", debug=True, port=80)
