import React from "react";
import {Avatar} from "@vkontakte/vkui";
import './Styles.scss';
// @ts-ignore
import Icon16Cancel from '@vkontakte/icons/dist/16/cancel';

export interface GroupItemProps {
    id: number;
    photo: string;
    removeHandler: any;
    membersCount: number;
}

class Presenter extends React.Component <GroupItemProps> {

    constructor(props: GroupItemProps) {
        super(props);
    }

    private getMembersCount(count: number) {
        let str = `${count}`;
        let res = parseFloat((count / 1000000).toFixed(1));
        if (Math.trunc(res) > 0) {
            str = `${res}М`;
            return str;
        }
        res = parseFloat((count / 1000).toFixed(1));
        if (Math.trunc(res) > 0) {
            str = `${res}К`;
            return str;
        }
        return str;
    }

    render = () => {
        const {id, photo, removeHandler, membersCount} = this.props;
        return (
            <div className="groupItem">
                <div className="photo">
                    <Avatar src={photo}/>
                </div>
                <div className="remove" onClick={(e) => removeHandler(id)}>
                    <Avatar style={{background: 'var(--destructive)'}} size={24}>
                        <Icon16Cancel fill="var(--white)"/>
                    </Avatar>
                </div>
                {membersCount > 0 && <div className="membersCount">
                    {this.getMembersCount(membersCount)}
                </div>}
            </div>
        );
    }
}

export default Presenter;
