import React from 'react';
import Layout from "../Layout";
import {Button, Div, Input, PanelHeader, Search, Spinner} from "@vkontakte/vkui";

class Presenter extends React.Component {

    public state: any;

    constructor(props: any) {
        super(props);
        this.state = {
            search: '',
            error: '',
            loading: false
        };
        this.getInformationHandler = this.getInformationHandler.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    private getInformationHandler(e: any) {
        const {search} = this.state;
        if (search.indexOf("com/") < 0) {
            this.setState({error: 'Ссылка введена неверно!'});
            return;
        }
        this.setState({error: ''});
        let screenName = search.split('com/')[1];
        this.start(screenName);
    }

    private async start(screenName: string) {
        this.setState({loading: true});
        console.log('start', screenName);
        this.setState({loading: false});
    }

    private onChange(e: any) {
        this.setState({search: e.target.value});
    }

    render = () => {
        const {search, error, loading} = this.state;
        return (
            <Layout id="groups">
                <PanelHeader>Скрытые данные</PanelHeader>
                <Div>Введите ссылку на профиль пользователя</Div>
                <Div>
                    <Input type="text"
                           placeholder="https://vk.com/******"
                           value={search}
                           onChange={this.onChange}/>
                    <Button size="l" style={{marginTop: '10px'}} onClick={this.getInformationHandler}>Получить информацию</Button>
                </Div>
                {loading && <Div><Spinner size="medium" style={{ marginTop: 20 }} /></Div>}
                {error.length > 0 && <Div style={{color: 'red'}}>{error}</Div>}
            </Layout>
        );
    }
}

export default Presenter;
