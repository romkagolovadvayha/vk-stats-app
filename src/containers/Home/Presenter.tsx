import React from 'react';
import './Styles.scss';
import Layout from "../Layout";
// @ts-ignore
import {Link} from "react-router";
import User from "../../components/User/User";
// import Balance from "../../components/User/Balance";
import {Separator, List, Cell, PanelHeader, Div} from "@vkontakte/vkui";
// import slider1 from './images/1.jpg';

// @ts-ignore
import Icon24View from '@vkontakte/icons/dist/24/view';
// @ts-ignore
import Icon24Users from '@vkontakte/icons/dist/24/users';

class Presenter extends React.Component {
    constructor(props: any) {
        super(props);
        this.fetchData();
    }

    fetchData() {
        // @ts-ignore
        const { getAuthToken } = this.props;
        getAuthToken();
    }

    render = () => {
        return (
            <Layout id="home">
                <PanelHeader>Анализ вконтакте</PanelHeader>
                <Div className="profile">
                    <User/>
                    {/*<Balance/>*/}
                </Div>
                <Separator wide/>
                <List className="navigationList">
                    <Link to="/groups">
                        <Cell before={<Icon24Users/>}>Общие участники</Cell>
                    </Link>
                    <Separator wide/>
                    <Link to="/securityUser">
                        <Cell before={<Icon24View/>}>Узнать скрытые данные</Cell>
                    </Link>
                </List>
            </Layout>
        );
    }
}

export default Presenter;