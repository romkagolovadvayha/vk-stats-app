import React from "react";
// @ts-ignore
import {connect} from "react-redux";
import {ActionSheet, ActionSheetItem, CellButton, View, Separator, Alert, Panel} from "@vkontakte/vkui";
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
            popout: null,
            groups: [
                {id: 1, photo: 'https://pp.userapi.com/c841034/v841034569/3b8c1/pt3sOw_qhfg.jpg'},
                {id: 2, photo: 'https://pp.userapi.com/c841034/v841034569/3b8c1/pt3sOw_qhfg.jpg'},
                {id: 3, photo: 'https://pp.userapi.com/c841034/v841034569/3b8c1/pt3sOw_qhfg.jpg'},
                {id: 4, photo: 'https://pp.userapi.com/c841034/v841034569/3b8c1/pt3sOw_qhfg.jpg'},
                {id: 5, photo: 'https://pp.userapi.com/c841034/v841034569/3b8c1/pt3sOw_qhfg.jpg'},
            ]
        };
        this.closePopout = this.closePopout.bind(this);
        this.openIcons = this.openIcons.bind(this);
        this.openDestructive = this.openDestructive.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.removeHandler = this.removeHandler.bind(this);
    }

    private openIcons() {
        this.setState({
            popout:
                <ActionSheet onClose={() => this.setState({popout: null})}>
                    <ActionSheetItem key="add" autoclose before={<Icon24Add/>}>
                        Добавить сообщество/пользователя
                    </ActionSheetItem>
                    <ActionSheetItem key="cancel" autoclose mode="cancel">Отменить</ActionSheetItem>
                </ActionSheet>
        });
    }

    public removeItem(id: number) {
        let groups = this.state.groups.filter((group: any) => group.id !== id);
        this.setState({groups: groups});
    }

    private closePopout() {
        this.setState({popout: null});
    }

    private removeHandler(id: number) {
        this.openDestructive(id);
    }

    private openDestructive(id: number) {
        this.setState({
            popout:
                <Alert
                    actionsLayout="vertical"
                    actions={[{
                        title: 'Удалить',
                        autoclose: true,
                        mode: 'destructive',
                        action: () => this.removeItem(id),
                    }, {
                        title: 'Отмена',
                        autoclose: true,
                        mode: 'cancel'
                    }]}
                    onClose={this.closePopout}
                >
                    <h2>Удалить?</h2>
                    <p>Вы уверены, что хотите удалить из списка?</p>
                </Alert>
        });
    }

    render = () => {
        const {popout, groups} = this.state;
        return (
            <View popout={popout} header={false} activePanel={"groupsList"}>
                <Panel id="groupsList" separator={false}>
                    <CellButton onClick={this.openIcons} before={<Icon24Settings/>}>Управление</CellButton>
                    <Separator wide/>
                    <div className="groupsList">
                        {groups.map((group: any) => (
                            <GroupItem key={group.id}
                                       photo={group.photo}
                                       id={group.id}
                                       removeHandler={this.removeHandler}/>
                        ))}
                    </div>
                </Panel>
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
