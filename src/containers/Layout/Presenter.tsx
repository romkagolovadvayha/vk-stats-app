import React from 'react';
import {Panel, View} from "@vkontakte/vkui";
import FooterMenu from "../../components/FooterMenu/FooterMenu";

const Presenter = (props: any) => {
    const {popout, modal} = props;
    return (
        <View popout={popout} modal={modal} activePanel={props.id}>
            <Panel id={props.id}>
                <div style={{paddingBottom: '50px'}}>
                    {props.children}
                </div>
                <FooterMenu/>
            </Panel>
        </View>
    );
};


export default Presenter;
