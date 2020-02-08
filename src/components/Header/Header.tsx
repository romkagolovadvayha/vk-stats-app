import React from "react";
// @ts-ignore
import {Link} from "react-router";
import User from "../User/User";

class Header extends React.Component {

    render = () => (
        <header>
            <User/>
            <ul>
                <li>
                    <Link to="/">Главная страница</Link>
                </li>
                <li>
                    <Link to="/contacts">Контакты</Link>
                </li>
            </ul>
        </header>
    )
}

export default Header;