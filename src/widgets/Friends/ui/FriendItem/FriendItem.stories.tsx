import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { FriendItem } from './FriendItem';

export default {
    title: 'widgets/Friends/FriendItem',
    component: FriendItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof FriendItem>;

const Template: ComponentStory<typeof FriendItem> = (args) => <FriendItem {...args} />;

export const PossibleFriendOffline = Template.bind({});
PossibleFriendOffline.args = {
    profile: {
        id: 1,
        email: 'test@mail.ru',
        firstName: 'firstName',
        lastName: 'lastName',
        avatar: 'indigo',
        friendStatus: 'possibleFriend',
        onlineInfo: {
            isOnline: false,
            lastSeen: String(Date.now() - 300000),
        },
    },
};

export const PossibleFriendOnline = Template.bind({});
PossibleFriendOnline.args = {
    profile: {
        id: 1,
        email: 'test@mail.ru',
        firstName: 'firstName',
        lastName: 'lastName',
        avatar: 'indigo',
        friendStatus: 'possibleFriend',
        onlineInfo: {
            isOnline: true,
            lastSeen: String(Date.now()),
        },
    },
};

export const OutcomingRequestOffline = Template.bind({});
OutcomingRequestOffline.args = {
    profile: {
        id: 1,
        email: 'test@mail.ru',
        firstName: 'firstName',
        lastName: 'lastName',
        avatar: 'indigo',
        friendStatus: 'outcomingRequest',
        onlineInfo: {
            isOnline: false,
            lastSeen: String(Date.now() - 300000),
        },
    },
};

export const OutcomingRequestOnline = Template.bind({});
OutcomingRequestOnline.args = {
    profile: {
        id: 1,
        email: 'test@mail.ru',
        firstName: 'firstName',
        lastName: 'lastName',
        avatar: 'indigo',
        friendStatus: 'outcomingRequest',
        onlineInfo: {
            isOnline: true,
            lastSeen: String(Date.now()),
        },
    },
};

export const IncomingRequestOffline = Template.bind({});
IncomingRequestOffline.args = {
    profile: {
        id: 1,
        email: 'test@mail.ru',
        firstName: 'firstName',
        lastName: 'lastName',
        avatar: 'indigo',
        friendStatus: 'incomingRequest',
        onlineInfo: {
            isOnline: false,
            lastSeen: String(Date.now() - 300000),
        },
    },
};

export const IncomingRequestOnline = Template.bind({});
IncomingRequestOnline.args = {
    profile: {
        id: 1,
        email: 'test@mail.ru',
        firstName: 'firstName',
        lastName: 'lastName',
        avatar: 'indigo',
        friendStatus: 'incomingRequest',
        onlineInfo: {
            isOnline: true,
            lastSeen: String(Date.now()),
        },
    },
};

export const AlreadyFriendOffline = Template.bind({});
AlreadyFriendOffline.args = {
    profile: {
        id: 1,
        email: 'test@mail.ru',
        firstName: 'firstName',
        lastName: 'lastName',
        avatar: 'indigo',
        friendStatus: 'alreadyFriend',
        onlineInfo: {
            isOnline: false,
            lastSeen: String(Date.now() - 300000),
        },
    },
};

export const AlreadyFriendOnline = Template.bind({});
AlreadyFriendOnline.args = {
    profile: {
        id: 1,
        email: 'test@mail.ru',
        firstName: 'firstName',
        lastName: 'lastName',
        avatar: 'indigo',
        friendStatus: 'alreadyFriend',
        onlineInfo: {
            isOnline: true,
            lastSeen: String(Date.now()),
        },
    },
};
