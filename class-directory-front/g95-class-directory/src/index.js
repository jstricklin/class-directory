import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles/main.css'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
