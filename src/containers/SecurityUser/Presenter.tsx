import React from 'react';
import Layout from "../Layout";
import {Button, Div, Input, PanelHeader, Spinner} from "@vkontakte/vkui";

class Presenter extends React.Component {

    public state: any;

    constructor(props: any) {
        super(props);
        this.state = {
            search: '',
            error: '',
            loading: false,
            university: {},
            school: {},
            age: 0
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
        // @ts-ignore
        const {getExecuteGetFriendsInfo, token} = this.props;

        this.setState({loading: true});
        let user_id = await this.getObjectId(screenName);
        if (!user_id) return;
        let friends = await getExecuteGetFriendsInfo(user_id, token.access_token);
        let university = await this.getMyUniversities(friends);
        this.setState({university: university});
        let school = await this.getMySchool(friends);
        this.setState({school: school});
        let age = await this.getMyAge(friends);
        this.setState({age: age});
        this.setState({loading: false});
    }

    private async getMyUniversities(friends: any[]) {
        let list = [];
        for (let i = 0; i < friends.length; i++) {
            if (!friends[i].universities) {
                continue;
            }
            let universities = friends[i].universities;
            for (let j = 0; j < universities.length; j++) {
                let item = this.getItemArrayById(universities[j].id, list);
                if (item === null) {
                    let uni = universities[j];
                    uni.replayCount = 1;
                    list[list.length] = universities[j];
                } else {
                    this.replayCountIncItemArrayById(item.id, list);
                }
            }
        }
        return this.getItemMaxReplayCount(list);
    }

    private async getMySchool(friends: any[]) {
        let list = [];
        for (let i = 0; i < friends.length; i++) {
            if (!friends[i].schools) {
                continue;
            }
            let schools = friends[i].schools;
            for (let j = 0; j < schools.length; j++) {
                let item = this.getItemArrayById(schools[j].id, list);
                if (item === null) {
                    let uni = schools[j];
                    uni.replayCount = 1;
                    list[list.length] = schools[j];
                } else {
                    this.replayCountIncItemArrayById(item.id, list);
                }
            }
        }
        return this.getItemMaxReplayCount(list);
    }

    private async getMyAge(friends: any[]) {
        let myAge = 0;
        let ageList: number[] = [];
        for (let i = 0; i < friends.length; i++) {
            if (!friends[i].bdate) {
                continue;
            }
            let bdate = friends[i].bdate;
            if (bdate.replace(/[^.]/g, "").length !== 2) {
                continue;
            }
            let date = bdate.split('.');
            let age = this.birthDateToAge(`${date[2]}-${date[1]}-${date[0]}`);
            if (!ageList[age]) {
                ageList[age] = 1;
            } else {
                ageList[age]++;
            }
        }
        let maxAgeRepeat = 0;
        ageList.map(((item, index) => {
            if (maxAgeRepeat < item) {
                maxAgeRepeat = item;
                myAge = index;
            }
            return item;
        }));
        return myAge;
    }

    private birthDateToAge(birthDate: string) {
        // @ts-ignore
        return ((new Date().getTime() - new Date(birthDate)) / (24 * 3600 * 365.25 * 1000)) | 0;
    }

    private getItemArrayById(id: number, array: any[]) {
        for (let i = 0; i < array.length; i++) {
            if (id === array[i].id) {
                return array[i];
            }
        }
        return null;
    }
    private getItemMaxReplayCount(array: any[]) {
        let maxItem = array[0];
        for (let i = 1; i < array.length; i++) {
            if (maxItem.replayCount < array[i].replayCount) {
                maxItem = array[i];
            }
        }
        return maxItem;
    }

    private replayCountIncItemArrayById(id: number, array: any[]) {
        for (let k = 0; k < array.length; k++) {
            if (id === array[k].id) {
                array[k].replayCount++;
            }
        }
    }

    private async getObjectId(screenName: string) {
        // @ts-ignore
        const {token, getResolveScreenName} = this.props;
        let response = await getResolveScreenName(screenName, token.access_token);
        if (!response || !response.type) {
            this.setState({error: 'Это не пользователь!', loading: false});
            return false;
        }
        if (response.type !== 'user') {
            this.setState({error: 'Это не пользователь!', loading: false});
            return false;
        }
        return response.object_id;
    }

    private onChange(e: any) {
        this.setState({search: e.target.value});
    }

    render = () => {
        const {search, error, loading, university, school, age} = this.state;
        return (
            <Layout id="groups">
                <PanelHeader>Скрытые данные</PanelHeader>
                <Div>Введите ссылку на профиль пользователя</Div>
                <Div>
                    <Input type="text"
                           placeholder="https://vk.com/******"
                           value={search}
                           onChange={this.onChange}/>
                    <Button size="l" style={{marginTop: '10px'}} onClick={this.getInformationHandler}>Получить
                        информацию</Button>
                </Div>
                {university.name && <Div>
                    Университет "{university.name}"
                </Div>}
                {school.name && <Div>
                    Школа "{school.name}"
                </Div>}
                {age > 0 && <Div>
                    Примерный возраст: {age}
                </Div>}
                {loading && <Div><Spinner size="medium" style={{marginTop: 20}}/></Div>}
                {error.length > 0 && <Div style={{color: 'red'}}>{error}</Div>}
            </Layout>
        );
    }
}

export default Presenter;
