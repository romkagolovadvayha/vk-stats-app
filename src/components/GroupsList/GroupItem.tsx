import React from "react";
import {Avatar} from "@vkontakte/vkui";
import './GroupItem.scss';
// @ts-ignore
import Icon16Cancel from '@vkontakte/icons/dist/16/cancel';

export interface GroupItemProps {
    id: number;
    photo: string;
    removeHandler: any;
}
const GroupItem = (props: GroupItemProps) => {
    const {id, photo, removeHandler} = this.props;
    return (
        <div className="groupItem">
            <div className="photo">
                <Avatar src={photo} />
            </div>
            <div className="remove" onClick={(e) => removeHandler(id)}>
                <Avatar style={{background: 'var(--destructive)'}} size={24}>
                    <Icon16Cancel fill="var(--white)" />
                </Avatar>
            </div>
        </div>
    );
};

export default GroupItem;
