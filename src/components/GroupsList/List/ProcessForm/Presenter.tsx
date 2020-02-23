import React from "react";
import './Styles.scss';
import {Button, Div, InfoRow, Progress} from "@vkontakte/vkui";
// @ts-ignore
import Icon16Users from '@vkontakte/icons/dist/16/users';
import UserList from "./UserList";

export interface Props {
    items: any[];
}

export interface State {
    progress: number;
    process: boolean;
    intersec: any[];
    isStart: boolean;
}

class Presenter extends React.Component <Props, State> {

    constructor(props: any) {
        super(props);
        this.state = {
            progress: 0,
            process: false,
            intersec: [],
            isStart: false
        };
        this.startButton = this.startButton.bind(this);
    }

    private async start() {
        this.startProcess();
        // @ts-ignore
        const {items} = this.props;
        let allMembersCount = 0;
        for (let i = 0; i < items.length; i++) {
            allMembersCount += items[i].members_count;
        }
        let currentCount = 0;
        let intersec: any[] = [];
        for (let i = 0; i < items.length; i++) {
            let members = [];
            switch (items[i].type) {
                case 'group':
                case 'page':
                    members = await this.getMembersByGroupId(items[i].id, items[i].members_count, allMembersCount, currentCount);
                    break;
                case 'user':
                    members = await this.getMembersByUserId(items[i].id);
                    break;
            }
            members = members.map((item: string) => parseInt(item));
            currentCount += members.length;
            if (intersec.length === 0) {
                intersec = members;
            } else {
                intersec = this.intersecSortArr(intersec, members);
            }
        }
        this.setState({intersec: intersec});
        this.stopProcess();
    }

    private intersecSortArr(array_1: any[], array_2: any[]) {
        let n = array_1.length, m = array_2.length, i = 0, k = 0, j = 0, array_3 = [];
        while ((i < n) && (j < m)) // пока не дошли до конца массива
        {
            if (array_1[i] === array_2[j]) {
                // запишем элемент в массив array_3
                array_3[k] = array_1[i];
                // и сдвинем позицию во всех 3 массивах
                k++;
                i++;
                j++;
            } else {
                if (array_1[i] < array_2[j]) {
                    i++; // сдвинем позицию в первом массиве
                } else {
                    j++; // сдвинем позицию во втором массиве
                }
            }
        }
        return array_3;
    }

    private async getMembersByGroupId(id: number, membersCount: number, allMembersCount: number, currentCount: number) {
        const delay = (duration: any) => new Promise(resolve => setTimeout(resolve, duration));
        // @ts-ignore
        const {token, getExecuteGetMembers} = this.props;
        let members: any[] = [];
        let offset: number = 0;
        while (members.length < membersCount && offset < membersCount) {
            let newMembers = await getExecuteGetMembers(id, offset, membersCount, token.access_token);
            members = members.concat(newMembers);
            offset += 25000;
            let membersCountProcess = currentCount + members.length;
            let proc = Math.ceil((membersCountProcess / allMembersCount) * 100);
            this.setProgress(proc);
            await delay(334);
        }

        return members;
    }

    private async getMembersByUserId(id: number) {
        const delay = (duration: any) => new Promise(resolve => setTimeout(resolve, duration));
        // @ts-ignore
        const {token, getExecuteGetFriends} = this.props;
        let members = await getExecuteGetFriends(id, token.access_token);
        await delay(334);
        return members;
    }

    private startProcess() {
        console.log('startProcess');
        this.setState({progress: 0, process: true});
    }

    private setProgress(proc: number) {
        this.setState({progress: proc});
    }

    private stopProcess() {
        console.log('stopProcess');
        this.setState({progress: 0, process: false});
    }

    private startButton() {
        this.start();
        this.setState({isStart: true});
    }

    render = () => {
        const {progress, process, intersec, isStart} = this.state;
        const {items} = this.props;
        return (
            <div>
                {items.length > 1 &&
                <Div><Button onClick={this.startButton} before={<Icon16Users/>} disabled={process}>Начать сравнение</Button></Div>}
                {process && <Div>
                    <InfoRow header={false} title="Default">
                        <Progress value={progress}/>
                    </InfoRow>
                </Div>}
                {!process && isStart && <UserList items={intersec}/>}
            </div>
        );
    }
}

export default Presenter;
