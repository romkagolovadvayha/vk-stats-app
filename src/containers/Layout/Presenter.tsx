import React from 'react';
import {Panel, View} from "@vkontakte/vkui";
import FooterMenu from "../../components/FooterMenu/FooterMenu";

const Presenter = (props: any) => {
    const {popout} = props;
    return (
        <View popout={popout} activePanel={props.id}>
            <Panel id={props.id}>
                {props.children}
                <FooterMenu/>
            </Panel>
        </View>
    );
};


export default Presenter;
