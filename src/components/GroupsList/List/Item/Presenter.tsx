import React from "react";
import {Avatar} from "@vkontakte/vkui";
import './Styles.scss';
// @ts-ignore
import Icon16Cancel from '@vkontakte/icons/dist/16/cancel';

export interface GroupItemProps {
    id: number;
    photo: string;
    removeHandler: any;
}
const Presenter = (props: GroupItemProps) => {
    const {id, photo, removeHandler} = props;
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

export default Presenter;
