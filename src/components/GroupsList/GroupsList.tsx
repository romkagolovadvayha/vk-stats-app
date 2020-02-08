import React from "react";
// @ts-ignore
import {connect} from "react-redux";
import {ActionSheet, ActionSheetItem, CellButton, View, Panel, Separator} from "@vkontakte/vkui";
// @ts-ignore
import Icon24Add from '@vkontakte/icons/dist/24/add';
// @ts-ignore
import Icon24Settings from '@vkontakte/icons/dist/24/settings';
import GroupItem from "./GroupItem";
import './GroupsList.scss';

class GroupsList extends React.Component {

    public state: any;

    constructor(props: any) {
        super(props);
        this.state = {
            popout: null
        };
        this.openIcons = this.openIcons.bind(this);
    }

    private openIcons() {
        this.setState({
            popout:
                <ActionSheet onClose={() => this.setState({popout: null})}>
                    <ActionSheetItem autoclose before={<Icon24Add/>}>
                        Добавить сообщество/пользователя
                    </ActionSheetItem>
                    <ActionSheetItem autoclose mode="cancel">Отменить</ActionSheetItem>
                </ActionSheet>
        });
    }

    render = () => {
        return (
            <View popout={this.state.popout} header={false}>
                <CellButton onClick={this.openIcons} before={<Icon24Settings/>}>Управление</CellButton>
                <Separator wide/>
                <div className="groupsList">
                    <GroupItem photo={"https://pp.userapi.com/c841034/v841034569/3b8c1/pt3sOw_qhfg.jpg"}/>
                </div>
            </View>
        );
    }
}

const mapStateToProps = (state: any) => ({
    state,
    activeStory: state.activeStory,
});

const mapDispatchToProps = (dispatch: any) => ({
    dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupsList);
