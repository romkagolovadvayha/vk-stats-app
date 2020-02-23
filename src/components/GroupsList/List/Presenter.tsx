import React from "react";
import {CellButton, Separator, Alert} from "@vkontakte/vkui";
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
            groups: [
                {
                    id: 45653506,
                    name: "Афиша Грахово",
                    screen_name: "afisha_grahovo",
                    members_count: 4261,
                    photo_50: "https://sun7-7.userapi.com/c633829/v633829634/340e0/YSG7c2uY8-g.jpg?ava=1"
                },
                {
                    id: 87771814,
                    name: "СЕЛЬСКАЯ НОВЬ. Информационный портал. Грахово",
                    screen_name: "selnov_grahovo",
                    members_count: 4223,
                    photo_50: "https://sun7-8.userapi.com/c837623/v837623569/33af1/wzcEK04Dz18.jpg?ava=1"
                },
                {
                    id: 49248213,
                    name: "Ижевск Где Гай Стоят (ИГГС)",
                    screen_name: "udmurtiya18rus",
                    members_count: 239515,
                    photo_50: "https://sun7-9.userapi.com/c846218/v846218817/110f7/5kFx49u-ApU.jpg?ava=1"
                }
            ]
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
            </div>
        );
    }
}

export default Presenter;
