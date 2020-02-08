import React from "react";
import {Link} from 'react-router-dom'

class Header extends React.Component {
    render = () => (
        <header>
            <ul>
                <li>
                    <Link to="/">Главная</Link>
                </li>
                <li>
                    <Link to="/contacts">Контакты</Link>
                </li>
            </ul>
        </header>
    )
}

export default Header;