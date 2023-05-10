import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { chatsReducer } from 'entities/Chats';
import { userReducer } from 'entities/User';
import { lastSeen, message, user } from 'shared/config/storybook/const/data';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

import ChatsPage from './ChatsPage';

export default {
    title: 'pages/ChatsPage',
    component: ChatsPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ChatsPage>;

const Template: ComponentStory<typeof ChatsPage> = () => <ChatsPage />;

export const Default = Template.bind({});
Default.decorators = [
    StoreDecorator(
        {
            user: { data: user },
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
        { user: userReducer, chats: chatsReducer }
    ),
];
