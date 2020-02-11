import React from 'react';
// @ts-ignore
import {Group, CardGrid, Card, Header, PanelHeader, Div} from "@vkontakte/vkui";
import Layout from "../Layout";

const Faq = () => {
    return (
        <Layout id="faq">
            <PanelHeader>Помощь</PanelHeader>
            <Group separator="hide" header={<Header mode="secondary">Приложение платное?</Header>}>
                <CardGrid>
                    <Card size="l">
                        <Div>
                            У нас есть платные функции, но в большей части приложение имеет бесплатный функционал.
                        </Div>
                    </Card>
                </CardGrid>
            </Group>
            <Group separator="hide" header={<Header mode="secondary">Идеи предложения</Header>}>
                <CardGrid>
                    <Card size="l">
                        <Div>
                            Вы можете предложить нам свою идею, которую мы рассмотрим и возможно реализуем в данном приложении.
                        </Div>
                    </Card>
                </CardGrid>
            </Group>
        </Layout>
    );
};

export default Faq;
