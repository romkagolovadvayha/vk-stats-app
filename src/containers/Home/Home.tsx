import React from 'react';
import './Home.scss';
import Layout from "../Layout";
// @ts-ignore
import {Link} from "react-router";
import User from "../../components/User/User";
import Balance from "../../components/User/Balance";
import {Separator, List, Cell, Group, Gallery, PanelHeader, Div} from "@vkontakte/vkui";

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
                        slideWidth="90%"
                        style={{height: 150}}
                        bullets="dark"
                    >
                        <div style={{backgroundColor: 'var(--destructive)'}}/>
                        <div style={{backgroundColor: 'var(--button_commerce_background)'}}/>
                        <div style={{backgroundColor: 'var(--accent)'}}/>
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
