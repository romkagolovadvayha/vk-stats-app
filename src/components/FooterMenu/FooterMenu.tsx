import React from "react";
// @ts-ignore
import {connect} from "react-redux";
import {Tabbar, TabbarItem} from "@vkontakte/vkui";
// @ts-ignore
import {browserHistory} from "react-router";
// @ts-ignore
import Icon28ChatsOutline from '@vkontakte/icons/dist/28/chats_outline';
// @ts-ignore
import Icon24Help from '@vkontakte/icons/dist/24/help';
// @ts-ignore
import Icon24Home from '@vkontakte/icons/dist/24/home';

class FooterMenu extends React.Component {

    public state: any;

    constructor(props: any) {
        super(props);
        this.state = {
            activeStory: browserHistory.getCurrentLocation().pathname
        };
    }

    private onStoryChange = (e: any) => {
        let store = e.currentTarget.dataset.story;
        this.setState({ activeStory:  store});
        browserHistory.push(`${store}`);
    };

    render = () => {
        const {activeStory} = this.state;
        return (
            <Tabbar>
                <TabbarItem
                    onClick={(e: any) => this.onStoryChange(e)}
                    selected={activeStory === '/'}
                    data-story="/"
                    text="Домашняя"
                ><Icon24Home/></TabbarItem>
                <TabbarItem
                    onClick={(e: any) => this.onStoryChange(e)}
                    selected={activeStory === '/contacts'}
                    data-story="/contacts"
                    text="Контакты"
                ><Icon28ChatsOutline/></TabbarItem>
                <TabbarItem
                    onClick={(e: any) => this.onStoryChange(e)}
                    selected={activeStory === '/faq'}
                    data-story="/faq"
                    text="Помощь"
                ><Icon24Help/></TabbarItem>
            </Tabbar>
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

export default connect(mapStateToProps, mapDispatchToProps)(FooterMenu);
