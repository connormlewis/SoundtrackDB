# SoundtrackDB

[![Build Status](https://travis-ci.org/connormlewis/idb.svg?branch=master)](https://travis-ci.org/connormlewis/idb)

A system to connect soundtracks for movies and tv shows to their artists.

The project can be accessed at [soundtrackdb.me](soundtrackdb.me)

This project was created for CS 373 in Spring 2018 by Aylish Wrench, Melody Troung, 
Alan Yi, Taylor Schaffner, Steve Wang, and Connor Lewis


### Setup instructions

This project relies on Docker as the method for both development deployments as well as 
production deployments

To run locally, navigate to the root project directory and run `docker-compose build` to 
build the necessary images, followed by `docker-compose up -d`. This will launch a development 
instance at `localhost`. You then can view logs for the containers by doing 
`docker-compose logs -f`.

If any new dependencies are added using npm or pip, you must rebuild the images 
again using `docker-compose build`.

You can kill the development instance by using `docker-compose down`.