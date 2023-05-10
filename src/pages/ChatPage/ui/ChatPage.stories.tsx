import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { chatReducer } from 'entities/Chat';
import { userReducer } from 'entities/User';
import { user, messages } from 'shared/config/storybook/const/data';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

import ChatPage from './ChatPage';

export default {
    title: 'pages/ChatPage',
    component: ChatPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ChatPage>;

const Template: ComponentStory<typeof ChatPage> = () => <ChatPage />;

export const Default = Template.bind({});
Default.decorators = [
    StoreDecorator(
        {
            user: { data: user },
            chat: {
                data: { id: 1, user, messages },
            },
        },
        { user: userReducer, chat: chatReducer }
    ),
];
