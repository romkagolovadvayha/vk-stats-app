import React from "react";
import {ActionSheet, ActionSheetItem, CellButton, Separator, Alert} from "@vkontakte/vkui";
// @ts-ignore
import Icon24Add from '@vkontakte/icons/dist/24/add';
// @ts-ignore
import Icon24Settings from '@vkontakte/icons/dist/24/settings';
import GroupItem from "./Item";
import AddForm from "../AddForm";
import './Styles.scss';

class Presenter extends React.Component {
    public state: any;

    constructor(props: any) {
        super(props);
        this.state = {
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
        this.openAddGroupForm = this.openAddGroupForm.bind(this);
    }

    private openIcons() {
        // @ts-ignore
        const {setPopoutApp} = this.props;
        setPopoutApp(<ActionSheet onClose={() => this.closePopout()}>
            <ActionSheetItem key="add" autoclose before={<Icon24Add/>}>
                Добавить сообщество/пользователя
            </ActionSheetItem>
            <ActionSheetItem key="cancel" autoclose mode="cancel">Отменить</ActionSheetItem>
        </ActionSheet>);
    }

    public removeItem(id: number) {
        let groups = this.state.groups.filter((group: any) => group.id !== id);
        this.setState({groups: groups});
    }

    private closePopout() {
        console.log('closePopout');
        // @ts-ignore
        const {setPopoutApp} = this.props;
        setPopoutApp(false);
    }

    private removeHandler(id: number) {
        this.openDestructive(id);
    }

    private openDestructive(id: number) {
        // @ts-ignore
        const {setPopoutApp} = this.props;
        setPopoutApp(<Alert
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
        </Alert>);
    }

    private openAddGroupForm() {
        console.log('modal');
        // @ts-ignore
        const {setModalApp} = this.props;
        setModalApp(<AddForm/>);
    }

    render = () => {
        const {groups} = this.state;
        return (
            <div>
                <CellButton onClick={this.openIcons} before={<Icon24Settings/>}>Управление</CellButton>
                <Separator wide/>
                <div onClick={this.openAddGroupForm}>Открыть модальное</div>
                <div className="groupsList">
                    {groups.map((group: any) => (
                        <GroupItem key={group.id}
                                   photo={group.photo}
                                   id={group.id}
                                   removeHandler={this.removeHandler}/>
                    ))}
                </div>
            </div>
        );
    }
}

export default Presenter;
