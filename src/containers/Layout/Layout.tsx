import React from 'react';
import {Panel} from "@vkontakte/vkui";
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
