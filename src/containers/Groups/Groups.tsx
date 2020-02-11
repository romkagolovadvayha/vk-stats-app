import React from 'react';
import Layout from "../Layout";
import GroupsList from "../../components/GroupsList/GroupsList";
import {PanelHeader} from "@vkontakte/vkui";

class Groups extends React.Component {
    render() {
        return (
            <Layout id="groups">
                <PanelHeader>Общие участники</PanelHeader>
                <GroupsList/>
            </Layout>
        );
    };
}

export default Groups;
