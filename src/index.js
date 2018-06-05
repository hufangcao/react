import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter,Route} from 'react-router-dom'
import App from './components/App/App';
import './mock/index'
import store from './redux/store'
import {Provider} from 'react-redux'
ReactDOM.render((
    <Provider store={store}>
    <HashRouter>
        <Route path='/' component={App}/>
    </HashRouter>
    </Provider>
),document.getElementById('root'));

