import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Router from './router'
// import App from './App';
import axios from './utils/axios'
import {Provider} from 'react-redux'
import Store from './store/store'
import * as serviceWorker from './serviceWorker';
// import Admin from './component/admin/index'
Component.prototype.$axios=axios
ReactDOM.render(
    <Provider store={Store}>
        <Router></Router>
    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
