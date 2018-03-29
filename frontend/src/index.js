import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './components/App'
import registerServiceWorker from './registerServiceWorker';
import {UIRouter} from '@uirouter/react';
import {router} from './router.config'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/slick-carousel/slick/slick.css'; 
import '../node_modules/slick-carousel/slick/slick-theme.css';

ReactDOM.render(
  <UIRouter router={router}>
    <App />
  </UIRouter>
  , document.getElementById('root')
);
registerServiceWorker();
