import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { ProfileCardSmall } from './ProfileCardSmall';

export default {
    title: 'entities/Profile/ProfileCardSmall',
    component: ProfileCardSmall,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        data: {
            id: 1,
            avatar: 'indigo',
            email: 'test@mail.ru',
            firstName: 'firstName',
            lastName: 'lastName',
            onlineInfo: {
                isOnline: true,
                lastSeen: '123',
            },
        },
    },
} as ComponentMeta<typeof ProfileCardSmall>;

const Template: ComponentStory<typeof ProfileCardSmall> = (args) => <ProfileCardSmall {...args} />;

export const Offline = Template.bind({});
Offline.args = {
    data: {
        id: 1,
        avatar: 'indigo',
        email: 'test@mail.ru',
        firstName: 'firstName',
        lastName: 'lastName',
        onlineInfo: {
            isOnline: false,
            lastSeen: '123',
        },
    },
};

export const Online = Template.bind({});
Online.args = {
    data: {
        id: 1,
        avatar: 'indigo',
        email: 'test@mail.ru',
        firstName: 'firstName',
        lastName: 'lastName',
        onlineInfo: {
            isOnline: true,
            lastSeen: '123',
        },
    },
};
