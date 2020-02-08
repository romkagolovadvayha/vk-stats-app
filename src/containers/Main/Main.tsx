import {Switch, Route} from 'react-router-dom'
import React from "react";
import Home from "../Home/Home";
import Contacts from "../Contacts/Contacts";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

class Main extends React.Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/contacts' component={Contacts}/>
                    <Route component={NotFoundPage} />
                </Switch>
            </main>
        );
    };
}

export default Main;