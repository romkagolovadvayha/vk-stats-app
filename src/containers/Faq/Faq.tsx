import React from 'react';
// @ts-ignore
import {Group, Cell, Header} from "@vkontakte/vkui";
import Layout from "../Layout/Layout";

const Faq = () => {
    return (
        <Layout>
            <Group header={<Header mode="secondary">Faq</Header>}>
                <Cell>Hello</Cell>
                <Cell>World</Cell>
            </Group>
            Contacts page...
        </Layout>
    );
};

export default Faq;
