import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { SendMessage } from 'features/SendMessage';
import { user as data, lastSeen } from 'shared/config/storybook/const/data';

import { ProfileCardMedium } from './ProfileCardMedium';

export default {
    title: 'entities/Profile/ProfileCardMedium',
    component: ProfileCardMedium,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCardMedium>;

const Template: ComponentStory<typeof ProfileCardMedium> = (args) => <ProfileCardMedium {...args} />;

export const DefaultOffline = Template.bind({});
DefaultOffline.args = {
    option: (
        <SendMessage
            id={data.id}
            key='sendMessage'
        />
    ),
    data: { ...data, lastSeen: lastSeen(false) },
};

export const DefaultOnline = Template.bind({});
DefaultOnline.args = {
    option: (
        <SendMessage
            id={data.id}
            key='sendMessage'
        />
    ),
    data,
};
