import React from 'react';
import './Contacts.scss';
import "@vkontakte/vkui/dist/vkui.css";
// @ts-ignore
import {Group, Cell, Header} from "@vkontakte/vkui";
import Layout from "../Layout/Layout";

const Contacts = () => {
    return (
        <Layout>
            <Group header={<Header mode="secondary">Items</Header>}>
                <Cell>Hello</Cell>
                <Cell>World</Cell>
            </Group>
            Contacts page...
        </Layout>
    );
};

export default Contacts;
