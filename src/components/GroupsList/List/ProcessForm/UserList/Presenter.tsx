import React from "react";
import {Cell, FormLayout, Group, Header, List, Textarea} from "@vkontakte/vkui";
// @ts-ignore
import Icon24Upload from '@vkontakte/icons/dist/24/upload';

export interface Props {
    items: any[];
}

export interface State {
    separator: string;
}

class Presenter extends React.Component <Props, State> {

    constructor(props: any) {
        super(props);
        this.state = {
            separator: ', '
        };
    }

    render = () => {
        const {items} = this.props;
        const {separator} = this.state;
        let itemsStr = items.join(separator);
        return (
            <div>
                <Group header={<Header mode="secondary">Найдено {items.length} общих человек</Header>}>
                    <FormLayout>
                        <Textarea top="ID пользователей" value={itemsStr} />
                    </FormLayout>
                    <List>
                        <Cell before={<Icon24Upload />}>Выгрузить в TXT</Cell>
                        <Cell before={<Icon24Upload />}>Выгрузить в EXCEL</Cell>
                    </List>
                </Group>
            </div>
        );
    }
}

export default Presenter;
