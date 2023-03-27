import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { friendsReducer } from 'entities/Friends';
import { userReducer } from 'entities/User';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

import FriendsPage from './FriendsPage';

export default {
    title: 'pages/FriendsPage',
    component: FriendsPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof FriendsPage>;

const Template: ComponentStory<typeof FriendsPage> = () => <FriendsPage />;

export const AllFriends = Template.bind({});
AllFriends.decorators = [
    StoreDecorator(
        {
            friends: {
                data: [
                    {
                        id: 1,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'indigo',
                        friendStatus: 'alreadyFriend',
                        onlineInfo: { isOnline: true, lastSeen: String(Date.now()) },
                    },
                    {
                        id: 2,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'purple',
                        friendStatus: 'alreadyFriend',
                        onlineInfo: { isOnline: false, lastSeen: String(Date.now() - 300000) },
                    },
                    {
                        id: 3,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'blue',
                        friendStatus: 'alreadyFriend',
                        onlineInfo: { isOnline: true, lastSeen: String(Date.now()) },
                    },
                    {
                        id: 4,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'red',
                        friendStatus: 'alreadyFriend',
                        onlineInfo: { isOnline: false, lastSeen: String(Date.now() - 300000) },
                    },
                    {
                        id: 5,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'green',
                        friendStatus: 'alreadyFriend',
                        onlineInfo: { isOnline: true, lastSeen: String(Date.now()) },
                    },
                ],
                friendStatus: 'alreadyFriend',
                section: 'all',
                counts: { friends: 12, onlineFriends: 6, outcomingRequests: 3, incomingRequests: 1 },
            },
            user: { data: { id: 1 } },
        },
        { friends: friendsReducer, user: userReducer }
    ),
];

export const OnlineFriends = Template.bind({});
OnlineFriends.decorators = [
    StoreDecorator(
        {
            friends: {
                data: [
                    {
                        id: 1,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'indigo',
                        friendStatus: 'alreadyFriend',
                        onlineInfo: { isOnline: true, lastSeen: String(Date.now()) },
                    },
                    {
                        id: 2,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'purple',
                        friendStatus: 'alreadyFriend',
                        onlineInfo: { isOnline: true, lastSeen: String(Date.now()) },
                    },
                    {
                        id: 3,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'blue',
                        friendStatus: 'alreadyFriend',
                        onlineInfo: { isOnline: true, lastSeen: String(Date.now()) },
                    },
                    {
                        id: 4,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'red',
                        friendStatus: 'alreadyFriend',
                        onlineInfo: { isOnline: true, lastSeen: String(Date.now()) },
                    },
                    {
                        id: 5,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'green',
                        friendStatus: 'alreadyFriend',
                        onlineInfo: { isOnline: true, lastSeen: String(Date.now()) },
                    },
                ],
                section: 'online',
                friendStatus: 'alreadyFriend',
                counts: { friends: 12, onlineFriends: 6, outcomingRequests: 3, incomingRequests: 1 },
            },
            user: { data: { id: 1 } },
        },
        { friends: friendsReducer, user: userReducer }
    ),
];

export const Outcoming = Template.bind({});
Outcoming.decorators = [
    StoreDecorator(
        {
            friends: {
                data: [
                    {
                        id: 1,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'indigo',
                        friendStatus: 'outcomingRequest',
                        onlineInfo: { isOnline: true, lastSeen: String(Date.now()) },
                    },
                    {
                        id: 2,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'purple',
                        friendStatus: 'outcomingRequest',
                        onlineInfo: { isOnline: false, lastSeen: String(Date.now() - 300000) },
                    },
                    {
                        id: 3,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'blue',
                        friendStatus: 'outcomingRequest',
                        onlineInfo: { isOnline: true, lastSeen: String(Date.now()) },
                    },
                    {
                        id: 4,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'red',
                        friendStatus: 'outcomingRequest',
                        onlineInfo: { isOnline: false, lastSeen: String(Date.now() - 300000) },
                    },
                    {
                        id: 5,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'green',
                        friendStatus: 'outcomingRequest',
                        onlineInfo: { isOnline: true, lastSeen: String(Date.now()) },
                    },
                ],
                friendStatus: 'outcomingRequest',
                counts: { friends: 12, onlineFriends: 6, outcomingRequests: 3, incomingRequests: 1 },
            },
            user: { data: { id: 1 } },
        },
        { friends: friendsReducer, user: userReducer }
    ),
];

export const Incoming = Template.bind({});
Incoming.decorators = [
    StoreDecorator(
        {
            friends: {
                data: [
                    {
                        id: 1,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'indigo',
                        friendStatus: 'incomingRequest',
                        onlineInfo: { isOnline: true, lastSeen: String(Date.now()) },
                    },
                    {
                        id: 2,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'purple',
                        friendStatus: 'incomingRequest',
                        onlineInfo: { isOnline: false, lastSeen: String(Date.now() - 300000) },
                    },
                    {
                        id: 3,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'blue',
                        friendStatus: 'incomingRequest',
                        onlineInfo: { isOnline: true, lastSeen: String(Date.now()) },
                    },
                    {
                        id: 4,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'red',
                        friendStatus: 'incomingRequest',
                        onlineInfo: { isOnline: false, lastSeen: String(Date.now() - 300000) },
                    },
                    {
                        id: 5,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'green',
                        friendStatus: 'incomingRequest',
                        onlineInfo: { isOnline: true, lastSeen: String(Date.now()) },
                    },
                ],
                friendStatus: 'incomingRequest',
                counts: { friends: 12, onlineFriends: 6, outcomingRequests: 3, incomingRequests: 1 },
            },
            user: { data: { id: 1 } },
        },
        { friends: friendsReducer, user: userReducer }
    ),
];

export const PossibleFriends = Template.bind({});
PossibleFriends.decorators = [
    StoreDecorator(
        {
            friends: {
                data: [
                    {
                        id: 1,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'indigo',
                        friendStatus: 'possibleFriend',
                        onlineInfo: { isOnline: true, lastSeen: String(Date.now()) },
                    },
                    {
                        id: 2,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'purple',
                        friendStatus: 'possibleFriend',
                        onlineInfo: { isOnline: false, lastSeen: String(Date.now() - 300000) },
                    },
                    {
                        id: 3,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'blue',
                        friendStatus: 'possibleFriend',
                        onlineInfo: { isOnline: true, lastSeen: String(Date.now()) },
                    },
                    {
                        id: 4,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'red',
                        friendStatus: 'possibleFriend',
                        onlineInfo: { isOnline: false, lastSeen: String(Date.now() - 300000) },
                    },
                    {
                        id: 5,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'green',
                        friendStatus: 'possibleFriend',
                        onlineInfo: { isOnline: true, lastSeen: String(Date.now()) },
                    },
                ],
                friendStatus: 'possibleFriend',
                counts: { friends: 12, onlineFriends: 6, outcomingRequests: 3, incomingRequests: 1 },
            },
            user: { data: { id: 1 } },
        },
        { friends: friendsReducer, user: userReducer }
    ),
];

export const Mixed = Template.bind({});
Mixed.decorators = [
    StoreDecorator(
        {
            friends: {
                data: [
                    {
                        id: 1,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'indigo',
                        onlineInfo: { isOnline: true, lastSeen: String(Date.now()) },
                        friendStatus: 'alreadyFriend',
                    },
                    {
                        id: 2,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'purple',
                        onlineInfo: { isOnline: false, lastSeen: String(Date.now() - 300000) },

                        friendStatus: 'alreadyFriend',
                    },
                    {
                        id: 3,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'red',
                        onlineInfo: { isOnline: true, lastSeen: String(Date.now()) },
                        friendStatus: 'incomingRequest',
                    },
                    {
                        id: 4,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'orange',
                        onlineInfo: { isOnline: false, lastSeen: String(Date.now() - 300000) },

                        friendStatus: 'incomingRequest',
                    },
                    {
                        id: 5,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'blue',
                        onlineInfo: { isOnline: true, lastSeen: String(Date.now()) },
                        friendStatus: 'outcomingRequest',
                    },
                    {
                        id: 6,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'yellow',
                        onlineInfo: { isOnline: false, lastSeen: String(Date.now() - 300000) },

                        friendStatus: 'outcomingRequest',
                    },
                    {
                        id: 7,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'green',
                        onlineInfo: { isOnline: true, lastSeen: String(Date.now()) },
                        friendStatus: 'possibleFriend',
                    },
                    {
                        id: 8,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'teal',
                        onlineInfo: { isOnline: false, lastSeen: String(Date.now() - 300000) },

                        friendStatus: 'possibleFriend',
                    },
                ],
                counts: { friends: 12, onlineFriends: 6, outcomingRequests: 3, incomingRequests: 1 },
                friendStatus: 'possibleFriend',
            },
            user: { data: { id: 1 } },
        },
        { friends: friendsReducer, user: userReducer }
    ),
];
