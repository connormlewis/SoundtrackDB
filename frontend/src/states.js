import React from 'react'; 

import MediaHome from './components/home-pages/MediaHome'

const HOME = {
  name: 'home',
  url: '',
  component: () => <h3>home</h3>
};

const ABOUT = {
  name: 'about',
  url: '/about',
  component: () => <h3>about</h3>
};

const ALBUM_HOME = {
  name: 'albumHome',
  url: '/album',
  component: () => <h3>album home</h3>
};

const ARTIST_HOME = {
  name: 'artistHome',
  url: '/artist',
  component: () => <h3>artist home</h3>
};

const MEDIA_HOME = {
  name: 'mediaHome',
  url: '/tv-movie',
  component: MediaHome
};

const ALBUM_INSTANCE = {
  name: 'albumInstance',
  url: '/album/:albumID',
  component: () => <h3>album instance</h3>
};

const ARTIST_INSTANCE = {
  name: 'artistInstance',
  url: '/artist/:artistID',
  component: () => <h3>artist instance</h3>
};

const MEDIA_INSTANCE = {
  name: 'mediaInstance',
  url: '/tv-movie/:mediaID',
  component: () => <h3>media instance</h3>
};

export default [HOME, ABOUT, ALBUM_HOME, ARTIST_HOME, MEDIA_HOME, ALBUM_INSTANCE, ARTIST_INSTANCE, MEDIA_INSTANCE]; 