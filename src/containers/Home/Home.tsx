import React from 'react';
import './Home.scss';
import Layout from "../Layout/Layout";
// @ts-ignore
import {Link} from "react-router";
import User from "../../components/User/User";
import Balance from "../../components/User/Balance";
import {Separator, List, Cell, Counter} from "@vkontakte/vkui";

// @ts-ignore
import Icon24User from '@vkontakte/icons/dist/24/user';
// @ts-ignore
import Icon24Users from '@vkontakte/icons/dist/24/users';
// @ts-ignore
import Icon24Message from '@vkontakte/icons/dist/24/message';

class Home extends React.Component {
    render() {
        return (
            <Layout>
                <div className="profile">
                    <User/>
                    <Balance/>
                </div>
                <Separator wide/>
                <List>
                    <Link to="/groups">
                        <Cell before={<Icon24Users/>}>Общие участники</Cell>
                    </Link>
                    <Separator wide/>
                    <Link to="/contacts">
                        <Cell before={<Icon24User/>}>Узнать скрытые данные</Cell>
                    </Link>
                    <Separator wide/>
                    <Link to="/faq">
                        <Cell before={<Icon24Message/>} indicator={<Counter>0</Counter>}>Сообщения</Cell>
                    </Link>
                </List>
            </Layout>
        );
    };
}

export default Home;
