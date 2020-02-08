import React from 'react';
import {Panel, View} from "@vkontakte/vkui";
import Header from "../../components/Header/Header";
import FooterMenu from "../../components/FooterMenu/FooterMenu";

const Layout = (props: any) => {
    return (
        <Panel separator={false}>
            {/*<Header/>*/}
            {props.children}
            <FooterMenu/>
        </Panel>
    );
};

export default Layout;
