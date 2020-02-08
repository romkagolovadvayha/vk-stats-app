import React, {HTMLAttributes, ReactNode} from "react";
import {Avatar} from "@vkontakte/vkui";
import './GroupItem.scss';
// @ts-ignore
import Icon16Cancel from '@vkontakte/icons/dist/16/cancel';

export interface GroupItemProps {
    photo: string;
}

class GroupItem extends React.Component<GroupItemProps> {

    constructor(props: GroupItemProps) {
        super(props);
    }

    render = () => {
        const {photo} = this.props;
        return (
            <div className="groupItem">
                <div className="photo">
                    <Avatar src={photo}/>
                </div>
                <div className="remove">
                    <Avatar style={{ background: 'var(--destructive)' }} size={24}><Icon16Cancel fill="var(--white)" /></Avatar>
                </div>
            </div>
        );
    }
}

export default GroupItem;
