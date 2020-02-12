import React from 'react';
import './Home.scss';
import Layout from "../Layout";
// @ts-ignore
import {Link} from "react-router";
import User from "../../components/User/User";
import Balance from "../../components/User/Balance";
import {Separator, List, Cell, Group, Gallery, PanelHeader, Div} from "@vkontakte/vkui";
import slider1 from './images/1.jpg';
import slider2 from './images/2.jpg';
import slider3 from './images/3.jpg';

// @ts-ignore
import Icon24User from '@vkontakte/icons/dist/24/user';
// @ts-ignore
import Icon24Users from '@vkontakte/icons/dist/24/users';

class Home extends React.Component {
    render() {
        return (
            <Layout id="home">
                <PanelHeader>Анализ вконтакте</PanelHeader>
                <Div className="profile">
                    <User/>
                    <Balance/>
                </Div>
                <Group header={false}>
                    <Gallery
                        slideWidth="100%"
                        style={{height: 200}}
                        bullets="dark"
                    >
                        <div className="slide" style={{backgroundImage: `url(${slider1})`}}/>
                        <div className="slide" style={{backgroundImage: `url(${slider2})`}}/>
                        <div className="slide" style={{backgroundImage: `url(${slider3})`}}/>
                    </Gallery>
                </Group>
                <List className="navigationList">
                    <Link to="/groups">
                        <Cell before={<Icon24Users/>}>Общие участники</Cell>
                    </Link>
                    <Separator wide/>
                    <Link to="/contacts">
                        <Cell before={<Icon24User/>}>Узнать скрытые данные</Cell>
                    </Link>
                </List>
            </Layout>
        );
    };
}

export default Home;
