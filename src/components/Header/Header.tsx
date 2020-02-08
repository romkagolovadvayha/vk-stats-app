import React from "react";
import User from "../User/User";
// @ts-ignore
import Icon24ReorderIos from '@vkontakte/icons/dist/24/reorder_ios';
import {PanelHeader, PanelHeaderButton} from "@vkontakte/vkui";

class Header extends React.Component {

    // @ts-ignore
    render = () => (
        <PanelHeader
            left={<PanelHeaderButton key="reorder"><Icon24ReorderIos/></PanelHeaderButton>}
        >
            <User/>
        </PanelHeader>
    )
}

export default Header;