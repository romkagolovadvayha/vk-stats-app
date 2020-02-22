import React from 'react';
import ReactDOM from 'react-dom';
// @ts-ignore
import {Router, Route, browserHistory} from "react-router";
// @ts-ignore
import connect from "@vkontakte/vk-connect";
// @ts-ignore
import {syncHistoryWithStore} from "react-router-redux";
import {Provider} from "react-redux";
import configureStore from "./redux/configureStore";
import Home from "./containers/Home";
import Contacts from "./containers/Contacts/Contacts";
import Faq from "./containers/Faq/Faq";
import Presenter from "./containers/Groups";
import NotFoundPage from "./containers/NotFoundPage/NotFoundPage";

import './index.scss';

const store = configureStore();

const history = syncHistoryWithStore(browserHistory, store);

connect.send("VKWebAppInit", {});

ReactDOM.render((
    <Provider store={store}>
        <Router history={history}>
            <Route exact path='/' component={Home}/>
            <Route exact path='/contacts' component={Contacts}/>
            <Route exact path='/faq' component={Faq}/>
            <Route exact path='/groups' component={Presenter}/>
            <Route component={NotFoundPage}/>
        </Router>
    </Provider>
), document.getElementById('root'));
