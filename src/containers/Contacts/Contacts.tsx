import React from 'react';
import './Contacts.scss';
import "@vkontakte/vkui/dist/vkui.css";
// @ts-ignore
import {Div, PanelHeader} from "@vkontakte/vkui";
import Layout from "../Layout";

const Contacts = () => {
    return (
        <Layout id="contacts">
            <PanelHeader>Контакты</PanelHeader>
            <Div>
                Contacts page...
            </Div>
        </Layout>
    );
};

export default Contacts;
