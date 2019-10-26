<<<<<<< HEAD
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Router from './router'
import axios from './utils/axios'
<<<<<<< HEAD
<<<<<<< HEAD
=======
import React ,{Component}from 'react';
import ReactDOM from 'react-dom';
import Router from './router'
import axios from './utils/axios'
>>>>>>> zyf
// import App from './App';

=======
=======
>>>>>>> 5a2ac700f2b4d854ceff68b08769aa8cfda1ab8d
import {Provider} from 'react-redux'
import Store from './store/store'
import * as serviceWorker from './serviceWorker';
// import Admin from './component/admin/index'
<<<<<<< HEAD
Component.prototype.$axios=axios
ReactDOM.render(
    <Provider store={Store}>
        <Router></Router>
    </Provider>
=======
Component.prototype.$axios = axios
ReactDOM.render(
<Router></Router>
>>>>>>> zyf
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
