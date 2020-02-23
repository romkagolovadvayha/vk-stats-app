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
import Icon24User from '@vkontakte/icons/dist/24/user';
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
                {/*<Group header={false}>*/}
                {/*    <Gallery*/}
                {/*        slideWidth="100%"*/}
                {/*        style={{height: 200}}*/}
                {/*        bullets="dark"*/}
                {/*    >*/}
                {/*        <div className="slide" style={{backgroundImage: `url(${slider1})`}}/>*/}
                {/*        <div className="slide" style={{backgroundImage: `url(${slider2})`}}/>*/}
                {/*        <div className="slide" style={{backgroundImage: `url(${slider3})`}}/>*/}
                {/*    </Gallery>*/}
                {/*</Group>*/}
                <Separator wide/>
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
    }
}

export default Presenter;