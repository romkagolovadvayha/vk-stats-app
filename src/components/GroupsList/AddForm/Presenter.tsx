import React from 'react';
import {
    Avatar,
    Cell,
    Div,
    List,
    ModalPage,
    ModalPageHeader,
    ModalRoot,
    PanelHeaderButton,
    Search,
    Spinner
} from "@vkontakte/vkui";
// @ts-ignore
import Icon24Cancel from '@vkontakte/icons/dist/24/cancel';

class Presenter extends React.Component {
    public state: {
        search: string,
        items: {
            id: number,
            name: string,
            photo_50: string
        }[]
    };

    constructor(props: any) {
        super(props);
        this.state = {
            search: '',
            items: []
        };
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        this.fetchData();
        this.getGroupsList();
    }

    private onChange(e: any) {
        this.setState({search: e.target.value});
    }

    private async fetchData() {
        await this.getGroupsList();
        await this.getFriendsList();
    }

    private async getGroupsList() {
        // @ts-ignore
        const {token, getGroups, groups} = this.props;
        let groupsList = groups;
        const {items} = this.state;
        if (!groupsList.count) {
            groupsList = await getGroups(token.access_token);
        }
        groupsList = groupsList.items.map((item: any) => {
            return {
                id: item.id,
                name: item.name,
                photo_50: item.photo_50,
                members_count: item.members_count,
            };
        });
        this.setState({items: items.concat(groupsList)});
    }

    private async getFriendsList() {
        // @ts-ignore
        const {token, getFriends, friends} = this.props;
        let friendsList = friends;
        const {items} = this.state;
        if (!friendsList.count) {
            friendsList = await getFriends(token.access_token);
        }
        friendsList = friendsList.items.map((item: any) => {
            return {
                id: item.id,
                name: item.first_name + ' ' + item.last_name,
                photo_50: item.photo_50
            };
        });
        this.setState({items: items.concat(friendsList)});
    }

    get items() {
        // @ts-ignore
        const {search, items} = this.state;
        // @ts-ignore
        return items.filter(({name}) => name.toLowerCase().indexOf(search.toLowerCase()) > -1);
    }

    private modalBack = () => {
        // @ts-ignore
        const {setModalApp} = this.props;
        setModalApp(false);
        return {};
    };

    private selectItem = (item: any) => {
        // @ts-ignore
        const {addItemHandler} = this.props;
        addItemHandler(item);
        this.modalBack();
    };

    render() {
        // @ts-ignore
        const {loadingGroups, loadingFriends} = this.props;
        const loadingItems = loadingGroups || loadingFriends;
        // @ts-ignore
        const {search} = this.state;
        return (
            <ModalRoot activeModal="modalFormAddGroups">
                <ModalPage
                    id="modalFormAddGroups"
                    dynamicContentHeight
                    onClose={this.modalBack}
                    header={
                        <ModalPageHeader
                            left={<PanelHeaderButton onClick={this.modalBack}><Icon24Cancel/></PanelHeaderButton>}
                        >
                            Добавить
                        </ModalPageHeader>
                    }>
                    <Search
                        value={search}
                        onChange={this.onChange}
                    />
                    {loadingItems && <Div><Spinner size="medium"/></Div>}
                    {!loadingItems && search.length > 0 && <List>
                        {this.items.slice(0, 5).map((item) => (
                            <Cell
                                before={<Avatar size={40}
                                                src={item.photo_50}/>}
                                onClick={() => this.selectItem(item)}
                                key={item.id}
                            >{item.name}</Cell>
                        ))}
                    </List>}
                    {!loadingItems && search.length === 0 && <Div style={{color: 'gray'}}>
                        Введите ссылку на сообщество или пользователя.
                    </Div>}
                </ModalPage>
            </ModalRoot>
        )
            ;
    }
}

export default Presenter;