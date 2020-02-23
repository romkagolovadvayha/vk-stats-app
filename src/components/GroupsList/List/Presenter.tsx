import React from "react";
import {CellButton, Separator, Alert, Div} from "@vkontakte/vkui";
// @ts-ignore
import Icon24Add from '@vkontakte/icons/dist/24/add';
import GroupItem from "./Item";
import AddForm from "../AddForm";
import ProcessForm from "./ProcessForm";
import './Styles.scss';

class Presenter extends React.Component {
    public state: any;

    constructor(props: any) {
        super(props);
        this.state = {
            groups: []
        };
        this.closePopout = this.closePopout.bind(this);
        this.openDestructive = this.openDestructive.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.removeHandler = this.removeHandler.bind(this);
        this.openAddGroupForm = this.openAddGroupForm.bind(this);
    }

    public removeItem(id: number) {
        let groups = this.state.groups.filter((group: any) => group.id !== id);
        this.setState({groups: groups});
    }

    private closePopout() {
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
        // @ts-ignore
        setModalApp(<AddForm addItemHandler={this.addItem}/>);
    }

    private addItem = (item: any) => {
        console.log(item);
        let groups = this.state.groups;
        groups[groups.length] = item;
        this.setState({groups: groups});
    };

    render = () => {
        const {groups} = this.state;
        return (
            <div>
                <CellButton onClick={this.openAddGroupForm} before={<Icon24Add/>}>Добавить к сравнению</CellButton>
                <Separator wide/>
                {groups.length > 0 && <div>
                    <div className="groupsList">
                        {groups.map((group: any) => (
                            <GroupItem key={group.id}
                                       photo={group.photo_50}
                                       id={group.id}
                                       membersCount={group.members_count}
                                       removeHandler={this.removeHandler}/>
                        ))}
                    </div>
                    <ProcessForm items={this.state.groups}/>
                </div>}
                {groups.length < 2 && <Div>Добавьте 2 и более обьекта для сравнения</Div>}
            </div>
        );
    }
}

export default Presenter;
