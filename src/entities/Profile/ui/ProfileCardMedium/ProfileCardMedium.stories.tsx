import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { AcceptFriendRequest } from 'features/AcceptFriendRequest';
import { AddFriend } from 'features/AddFriend';
import { CancelFriendRequest } from 'features/CancelFriendRequest';
import { DeleteFriend } from 'features/DeleteFriend';
import { SendMessage } from 'features/SendMessage';

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
    options: [
        <SendMessage
            id={1}
            key='sendMessage'
        />,
    ],
    data: {
        id: 1,
        avatar: 'indigo',
        email: 'test@mail.ru',
        firstName: 'firstName',
        lastName: 'lastName',
        onlineInfo: {
            isOnline: false,
            lastSeen: String(Date.now() - 300000),
        },
    },
};

export const DefaultOnline = Template.bind({});
DefaultOnline.args = {
    options: [
        <SendMessage
            id={1}
            key='sendMessage'
        />,
    ],
    data: {
        id: 1,
        avatar: 'indigo',
        email: 'test@mail.ru',
        firstName: 'firstName',
        lastName: 'lastName',
        onlineInfo: {
            isOnline: true,
            lastSeen: String(Date.now()),
        },
    },
};

export const PossibleFriendOffline = Template.bind({});
PossibleFriendOffline.args = {
    options: [
        <SendMessage
            id={1}
            key='sendMessage'
        />,
        <AddFriend
            id={1}
            key='addFriend'
        />,
    ],
    data: {
        id: 1,
        avatar: 'indigo',
        email: 'test@mail.ru',
        firstName: 'firstName',
        lastName: 'lastName',
        onlineInfo: {
            isOnline: false,
            lastSeen: String(Date.now() - 300000),
        },
    },
};

export const PossibleFriendOnline = Template.bind({});
PossibleFriendOnline.args = {
    options: [
        <SendMessage
            id={1}
            key='sendMessage'
        />,
        <AddFriend
            id={1}
            key='addFriend'
        />,
    ],
    data: {
        id: 1,
        avatar: 'indigo',
        email: 'test@mail.ru',
        firstName: 'firstName',
        lastName: 'lastName',
        onlineInfo: {
            isOnline: true,
            lastSeen: String(Date.now()),
        },
    },
};

export const OutcomingRequestOffline = Template.bind({});
OutcomingRequestOffline.args = {
    options: [
        <SendMessage
            id={1}
            key='sendMessage'
        />,
        <CancelFriendRequest
            id={1}
            key='cancelFriendRequest'
        />,
    ],
    data: {
        id: 1,
        avatar: 'indigo',
        email: 'test@mail.ru',
        firstName: 'firstName',
        lastName: 'lastName',
        onlineInfo: {
            isOnline: false,
            lastSeen: String(Date.now() - 300000),
        },
    },
};

export const OutcomingRequestOnline = Template.bind({});
OutcomingRequestOnline.args = {
    options: [
        <SendMessage
            id={1}
            key='sendMessage'
        />,
        <CancelFriendRequest
            id={1}
            key='cancelFriendRequest'
        />,
    ],
    data: {
        id: 1,
        avatar: 'indigo',
        email: 'test@mail.ru',
        firstName: 'firstName',
        lastName: 'lastName',
        onlineInfo: {
            isOnline: true,
            lastSeen: String(Date.now()),
        },
    },
};

export const IncomingRequestOffline = Template.bind({});
IncomingRequestOffline.args = {
    options: [
        <SendMessage
            id={1}
            key='sendMessage'
        />,
        <AcceptFriendRequest
            id={1}
            key='acceptFriendRequest'
        />,
    ],
    data: {
        id: 1,
        avatar: 'indigo',
        email: 'test@mail.ru',
        firstName: 'firstName',
        lastName: 'lastName',
        onlineInfo: {
            isOnline: false,
            lastSeen: String(Date.now() - 300000),
        },
    },
};

export const IncomingRequestOnline = Template.bind({});
IncomingRequestOnline.args = {
    options: [
        <SendMessage
            id={1}
            key='sendMessage'
        />,
        <AcceptFriendRequest
            id={1}
            key='acceptFriendRequest'
        />,
    ],
    data: {
        id: 1,
        avatar: 'indigo',
        email: 'test@mail.ru',
        firstName: 'firstName',
        lastName: 'lastName',
        onlineInfo: {
            isOnline: true,
            lastSeen: String(Date.now()),
        },
    },
};

export const AlreadyFriendOffline = Template.bind({});
AlreadyFriendOffline.args = {
    options: [
        <SendMessage
            id={1}
            key='sendMessage'
        />,
        <DeleteFriend
            id={1}
            key='deleteFriend'
        />,
    ],
    data: {
        id: 1,
        avatar: 'indigo',
        email: 'test@mail.ru',
        firstName: 'firstName',
        lastName: 'lastName',
        onlineInfo: {
            isOnline: false,
            lastSeen: String(Date.now() - 300000),
        },
    },
};

export const AlreadyFriendOnline = Template.bind({});
AlreadyFriendOnline.args = {
    options: [
        <SendMessage
            id={1}
            key='sendMessage'
        />,
        <DeleteFriend
            id={1}
            key='deleteFriend'
        />,
    ],
    data: {
        id: 1,
        avatar: 'indigo',
        email: 'test@mail.ru',
        firstName: 'firstName',
        lastName: 'lastName',
        onlineInfo: {
            isOnline: true,
            lastSeen: String(Date.now()),
        },
    },
};
