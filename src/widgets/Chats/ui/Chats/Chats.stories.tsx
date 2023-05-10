import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { chatsReducer } from 'entities/Chats';
import { lastSeen, message, user } from 'shared/config/storybook/const/data';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

import { Chats } from './Chats';

export default {
    title: 'widgets/Chats',
    component: Chats,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Chats>;

const Template: ComponentStory<typeof Chats> = () => <Chats />;

export const Default = Template.bind({});
Default.decorators = [
    StoreDecorator(
        {
            chats: {
                data: [
                    { user: { ...user }, message },
                    { user: { ...user, id: 2, lastSeen: lastSeen(false) }, message },
                    { user: { ...user, id: 3 }, message },
                    { user: { ...user, id: 4, lastSeen: lastSeen(false) }, message },
                    { user: { ...user, id: 5 }, message },
                    { user: { ...user, id: 6, lastSeen: lastSeen(false) }, message },
                ],
            },
        },
        { chats: chatsReducer }
    ),
];
