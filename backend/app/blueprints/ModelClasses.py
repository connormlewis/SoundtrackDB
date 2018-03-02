class Model(object):

    def __init__(self, **kwargs):
        for key in kwargs:
            setattr(self, key, kwargs[key])

class Artist(Model):
    pass
class Album(Model):
    pass
class Movie_TV(Model):
    pass
