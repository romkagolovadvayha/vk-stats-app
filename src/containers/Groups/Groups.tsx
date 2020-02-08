import React from 'react';
import Layout from "../Layout/Layout";
import GroupsList from "../../components/GroupsList/GroupsList";

class Groups extends React.Component {
    render() {
        return (
            <Layout>
                <GroupsList/>
            </Layout>
        );
    };
}

export default Groups;
