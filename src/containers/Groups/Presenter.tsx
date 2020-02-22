import React from 'react';
import Layout from "../Layout";
import GroupsList from "../../components/GroupsList/List";
import {PanelHeader} from "@vkontakte/vkui";

const Presenter = (props: any) => {
    return (
        <Layout id="groups">
            <PanelHeader>Общие участники</PanelHeader>
            <GroupsList/>
        </Layout>
    );
};

export default Presenter;
