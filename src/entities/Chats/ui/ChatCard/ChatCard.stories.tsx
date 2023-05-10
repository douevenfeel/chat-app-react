import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { lastSeen, message, user } from 'shared/config/storybook/const/data';

import { ChatCard } from './ChatCard';

export default {
    title: 'entities/Chats/ChatCard',
    component: ChatCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ChatCard>;

const Template: ComponentStory<typeof ChatCard> = (args) => <ChatCard {...args} />;

export const Offline = Template.bind({});
Offline.args = { user: { ...user, lastSeen: lastSeen(false) }, message };

export const Online = Template.bind({});
Online.args = { user: { ...user }, message };
