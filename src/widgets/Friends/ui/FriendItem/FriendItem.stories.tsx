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

export const DefaultOffline = Template.bind({});
DefaultOffline.args = {
    profile: {
        id: 1,
        email: 'test@mail.ru',
        firstName: 'firstName',
        lastName: 'lastName',
        avatar: 'indigo',

        lastSeen: String(Date.now() - 300000),
    },
};

export const DefaultOnline = Template.bind({});
DefaultOnline.args = {
    profile: {
        id: 1,
        email: 'test@mail.ru',
        firstName: 'firstName',
        lastName: 'lastName',
        avatar: 'indigo',

        lastSeen: String(Date.now()),
    },
};

export const PossibleFriendOffline = Template.bind({});
PossibleFriendOffline.args = {
    profile: {
        id: 1,
        email: 'test@mail.ru',
        firstName: 'firstName',
        lastName: 'lastName',
        avatar: 'indigo',
        friendStatus: 'possibleFriend',
        lastSeen: String(Date.now() - 300000),
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
        lastSeen: String(Date.now()),
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
        lastSeen: String(Date.now() - 300000),
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
        lastSeen: String(Date.now()),
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
        lastSeen: String(Date.now() - 300000),
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
        lastSeen: String(Date.now()),
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
        lastSeen: String(Date.now() - 300000),
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
        lastSeen: String(Date.now()),
    },
};
