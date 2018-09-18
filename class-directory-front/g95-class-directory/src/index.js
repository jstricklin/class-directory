import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.css';
import './styles/main.css'

ReactDOM.render(
    <Router>
        <App />
    </Router>, document.getElementById('root'));
registerServiceWorker();
