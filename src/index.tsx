import React from 'react';
import ReactDOM from 'react-dom';
// @ts-ignore
import {Router, Route, browserHistory} from "react-router";
// @ts-ignore
import {syncHistoryWithStore} from "react-router-redux";
import {Provider} from "react-redux";
import configureStore from "./redux/configureStore";
import Home from "./containers/Home/Home";
import Contacts from "./containers/Contacts/Contacts";
import NotFoundPage from "./containers/NotFoundPage/NotFoundPage";

import './index.scss';
import Header from "./components/Header/Header";

const store = configureStore();

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render((
    <Provider store={store}>
        <Router history={history}>
            <Route exact path='/' component={Home}/>
            <Route exact path='/contacts' component={Contacts}/>
            <Route component={NotFoundPage}/>
        </Router>
    </Provider>
), document.getElementById('root'));
