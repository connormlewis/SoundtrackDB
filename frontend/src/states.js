import React from 'react'; 
import Splash from './components/Splash';

import { MediaHome } from './components/home-pages/MediaHome'
import { AlbumHome } from './components/home-pages/AlbumsHome';
import { ArtistHome } from './components/home-pages/ArtistsHome';
import ApiService from './ApiService'

const HOME = {
  name: 'home',
  url: '',
  component: (Splash)
};

const ABOUT = {
  name: 'about',
  url: '/about',
  component: () => <h3>about</h3>
};

const ALBUM_HOME = {
  name: 'albumHome',
  url: '/album',
  component: AlbumHome,
  resolve: [{
    token: 'albums',
    resolveFn: () => ApiService.getAlbums()
  }]
};

const ARTIST_HOME = {
  name: 'artistHome',
  url: '/artist',
  component: ArtistHome,
  resolve: [{
    token: 'artists',
    resolveFn: () => ApiService.getArtists()
  }]
};

const MEDIA_HOME = {
  name: 'mediaHome',
  url: '/tv-movie',
  component: MediaHome,
  resolve: [{
    token: 'media',
    resolveFn: () => ApiService.getAllMedia()
  }]
};

const ALBUM_INSTANCE = {
  name: 'albumInstance',
  url: '/album/:albumID',
  component: () => <h3>album instance</h3>,
  resolve: [{
    token: 'album',
    deps: ['$transition$'],
    resolveFn: (trans) => ApiService.getAlbum(trans.params().albumID)
  }]
};

const ARTIST_INSTANCE = {
  name: 'artistInstance',
  url: '/artist/:artistID',
  component: () => <h3>artist instance</h3>,
  resolve: [{
    token: 'artist',
    deps: ['$transition$'],
    resolveFn: (trans) => ApiService.getArtist(trans.params().artistID)
  }]
};

const MEDIA_INSTANCE = {
  name: 'mediaInstance',
  url: '/tv-movie/:mediaID',
  component: () => <h3>media instance</h3>,
  resolve: [{
    token: 'media',
    deps: ['$transition$'],
    resolveFn: (trans) => ApiService.getMedia(trans.params().mediaID)
  }]
};

export default [HOME, ABOUT, ALBUM_HOME, ARTIST_HOME, MEDIA_HOME, ALBUM_INSTANCE, ARTIST_INSTANCE, MEDIA_INSTANCE]; 