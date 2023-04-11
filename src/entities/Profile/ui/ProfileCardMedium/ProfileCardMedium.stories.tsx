import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { SendMessage } from 'features/SendMessage';
import { UpdateFriendStatus } from 'features/UpdateFriendStatus';

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
        lastSeen: String(Date.now() - 300000),
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
        lastSeen: String(Date.now()),
    },
};

export const PossibleFriendOffline = Template.bind({});
PossibleFriendOffline.args = {
    options: [
        <SendMessage
            id={1}
            key='sendMessage'
        />,
        <UpdateFriendStatus
            friendStatus='possibleFriend'
            id={1}
            key='updateFriendStatus'
        />,
    ],
    data: {
        id: 1,
        avatar: 'indigo',
        email: 'test@mail.ru',
        firstName: 'firstName',
        lastName: 'lastName',
        friendStatus: 'possibleFriend',
        lastSeen: String(Date.now() - 300000),
    },
};

export const PossibleFriendOnline = Template.bind({});
PossibleFriendOnline.args = {
    options: [
        <SendMessage
            id={1}
            key='sendMessage'
        />,
        <UpdateFriendStatus
            friendStatus='possibleFriend'
            id={1}
            key='updateFriendStatus'
        />,
    ],
    data: {
        id: 1,
        avatar: 'indigo',
        email: 'test@mail.ru',
        firstName: 'firstName',
        lastName: 'lastName',
        friendStatus: 'possibleFriend',
        lastSeen: String(Date.now()),
    },
};

export const OutcomingRequestOffline = Template.bind({});
OutcomingRequestOffline.args = {
    options: [
        <SendMessage
            id={1}
            key='sendMessage'
        />,
        <UpdateFriendStatus
            friendStatus='outcomingRequest'
            id={1}
            key='updateFriendStatus'
        />,
    ],
    data: {
        id: 1,
        avatar: 'indigo',
        email: 'test@mail.ru',
        firstName: 'firstName',
        lastName: 'lastName',
        friendStatus: 'outcomingRequest',
        lastSeen: String(Date.now() - 300000),
    },
};

export const OutcomingRequestOnline = Template.bind({});
OutcomingRequestOnline.args = {
    options: [
        <SendMessage
            id={1}
            key='sendMessage'
        />,
        <UpdateFriendStatus
            friendStatus='outcomingRequest'
            id={1}
            key='updateFriendStatus'
        />,
    ],
    data: {
        id: 1,
        avatar: 'indigo',
        email: 'test@mail.ru',
        firstName: 'firstName',
        lastName: 'lastName',
        friendStatus: 'outcomingRequest',
        lastSeen: String(Date.now()),
    },
};

export const IncomingRequestOffline = Template.bind({});
IncomingRequestOffline.args = {
    options: [
        <SendMessage
            id={1}
            key='sendMessage'
        />,
        <UpdateFriendStatus
            friendStatus='incomingRequest'
            id={1}
            key='updateFriendStatus'
        />,
    ],
    data: {
        id: 1,
        avatar: 'indigo',
        email: 'test@mail.ru',
        firstName: 'firstName',
        lastName: 'lastName',
        friendStatus: 'incomingRequest',
        lastSeen: String(Date.now() - 300000),
    },
};

export const IncomingRequestOnline = Template.bind({});
IncomingRequestOnline.args = {
    options: [
        <SendMessage
            id={1}
            key='sendMessage'
        />,
        <UpdateFriendStatus
            friendStatus='incomingRequest'
            id={1}
            key='updateFriendStatus'
        />,
    ],
    data: {
        id: 1,
        avatar: 'indigo',
        email: 'test@mail.ru',
        firstName: 'firstName',
        lastName: 'lastName',
        friendStatus: 'incomingRequest',
        lastSeen: String(Date.now()),
    },
};

export const AlreadyFriendOffline = Template.bind({});
AlreadyFriendOffline.args = {
    options: [
        <SendMessage
            id={1}
            key='sendMessage'
        />,
        <UpdateFriendStatus
            friendStatus='alreadyFriend'
            id={1}
            key='updateFriendStatus'
        />,
    ],
    data: {
        id: 1,
        avatar: 'indigo',
        email: 'test@mail.ru',
        firstName: 'firstName',
        lastName: 'lastName',
        friendStatus: 'alreadyFriend',
        lastSeen: String(Date.now() - 300000),
    },
};

export const AlreadyFriendOnline = Template.bind({});
AlreadyFriendOnline.args = {
    options: [
        <SendMessage
            id={1}
            key='sendMessage'
        />,
        <UpdateFriendStatus
            friendStatus='alreadyFriend'
            id={1}
            key='updateFriendStatus'
        />,
    ],
    data: {
        id: 1,
        avatar: 'indigo',
        email: 'test@mail.ru',
        firstName: 'firstName',
        lastName: 'lastName',
        friendStatus: 'alreadyFriend',
        lastSeen: String(Date.now()),
    },
};
