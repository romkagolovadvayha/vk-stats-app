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
            photo_50: string,
            screen_name: string,
            members_count?: number
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
        if (e.target.value.indexOf("com/") >= 0) {
            let screenName = e.target.value.split('com/')[1];
            if (!this.isItem(screenName)) {
                this.getResolveScreenName(screenName);
            }
        }
        this.setState({search: e.target.value});
    }

    private async getResolveScreenName(screenName: string) {
        // @ts-ignore
        const {token, getResolveScreenName} = this.props;
        let response = await getResolveScreenName(screenName, token.access_token);
        if (!response || !response.type) {
            console.log('Не поддерживается');
            return;
        }
        switch (response.type) {
            case 'group':
            case 'page':
                await this.searchGroup(response.object_id);
                break;
            case 'user':
                await this.searchUser(response.object_id);
                break;
            default:
                console.log('Не поддерживается');
        }
    }

    private isItem(screen_name: string) {
        const {items} = this.state;
        for (let i = 0; i < items.length; i++) {
            if (items[i].screen_name === screen_name) {
                return true;
            }
        }
        return false;
    }

    private async searchGroup(objectId: number) {
        // @ts-ignore
        const {token, getGroup} = this.props;
        let group = await getGroup(objectId, token.access_token);
        const {items} = this.state;
        let newItems = items;
        newItems[newItems.length] = {
            id: group.id,
            name: group.name,
            photo_50: group.photo_50,
            screen_name: group.screen_name,
            members_count: group.members_count,
        };
        this.setState({items: newItems});
    }

    private async searchUser(objectId: number) {
        // @ts-ignore
        const {token, getUser} = this.props;
        let user = await getUser(objectId, token.access_token);
        const {items} = this.state;
        let newItems = items;
        newItems[newItems.length] = {
            id: user.id,
            name: `${user.first_name} ${user.last_name}`,
            photo_50: user.photo_50,
            screen_name: user.domain,
        };
        this.setState({items: newItems});
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
                screen_name: item.screen_name,
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
                name: `${item.first_name} ${item.last_name}`,
                screen_name: item.domain,
                photo_50: item.photo_50
            };
        });
        this.setState({items: items.concat(friendsList)});
    }

    get items() {
        // @ts-ignore
        const {search, items} = this.state;
        const isScreenName = search.indexOf("com/") >= 0;
        let screenName = '';
        if (isScreenName) {
            screenName = search.split('com/')[1];
        }
        return items.filter(({name, screen_name}) => {
            if (isScreenName) {
                return screen_name.toLowerCase().indexOf(screenName.toLowerCase()) > -1;
            }
            return name.toLowerCase().indexOf(search.toLowerCase()) > -1;
        });
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
                                key={item.screen_name}
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