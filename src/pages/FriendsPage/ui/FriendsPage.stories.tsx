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
                        lastSeen: String(Date.now()),
                    },
                    {
                        id: 2,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'purple',
                        friendStatus: 'alreadyFriend',
                        lastSeen: String(Date.now() - 300000),
                    },
                    {
                        id: 3,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'blue',
                        friendStatus: 'alreadyFriend',
                        lastSeen: String(Date.now()),
                    },
                    {
                        id: 4,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'red',
                        friendStatus: 'alreadyFriend',
                        lastSeen: String(Date.now() - 300000),
                    },
                    {
                        id: 5,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'green',
                        friendStatus: 'alreadyFriend',
                        lastSeen: String(Date.now()),
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
                        lastSeen: String(Date.now()),
                    },
                    {
                        id: 2,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'purple',
                        friendStatus: 'alreadyFriend',
                        lastSeen: String(Date.now()),
                    },
                    {
                        id: 3,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'blue',
                        friendStatus: 'alreadyFriend',
                        lastSeen: String(Date.now()),
                    },
                    {
                        id: 4,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'red',
                        friendStatus: 'alreadyFriend',
                        lastSeen: String(Date.now()),
                    },
                    {
                        id: 5,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'green',
                        friendStatus: 'alreadyFriend',
                        lastSeen: String(Date.now()),
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
                        lastSeen: String(Date.now()),
                    },
                    {
                        id: 2,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'purple',
                        friendStatus: 'outcomingRequest',
                        lastSeen: String(Date.now() - 300000),
                    },
                    {
                        id: 3,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'blue',
                        friendStatus: 'outcomingRequest',
                        lastSeen: String(Date.now()),
                    },
                    {
                        id: 4,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'red',
                        friendStatus: 'outcomingRequest',
                        lastSeen: String(Date.now() - 300000),
                    },
                    {
                        id: 5,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'green',
                        friendStatus: 'outcomingRequest',
                        lastSeen: String(Date.now()),
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
                        lastSeen: String(Date.now()),
                    },
                    {
                        id: 2,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'purple',
                        friendStatus: 'incomingRequest',
                        lastSeen: String(Date.now() - 300000),
                    },
                    {
                        id: 3,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'blue',
                        friendStatus: 'incomingRequest',
                        lastSeen: String(Date.now()),
                    },
                    {
                        id: 4,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'red',
                        friendStatus: 'incomingRequest',
                        lastSeen: String(Date.now() - 300000),
                    },
                    {
                        id: 5,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'green',
                        friendStatus: 'incomingRequest',
                        lastSeen: String(Date.now()),
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
                        lastSeen: String(Date.now()),
                    },
                    {
                        id: 2,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'purple',
                        friendStatus: 'possibleFriend',
                        lastSeen: String(Date.now() - 300000),
                    },
                    {
                        id: 3,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'blue',
                        friendStatus: 'possibleFriend',
                        lastSeen: String(Date.now()),
                    },
                    {
                        id: 4,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'red',
                        friendStatus: 'possibleFriend',
                        lastSeen: String(Date.now() - 300000),
                    },
                    {
                        id: 5,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'green',
                        friendStatus: 'possibleFriend',
                        lastSeen: String(Date.now()),
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
                        lastSeen: String(Date.now()),
                        friendStatus: 'alreadyFriend',
                    },
                    {
                        id: 2,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'purple',
                        lastSeen: String(Date.now() - 300000),
                        friendStatus: 'alreadyFriend',
                    },
                    {
                        id: 3,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'red',
                        lastSeen: String(Date.now()),
                        friendStatus: 'incomingRequest',
                    },
                    {
                        id: 4,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'orange',
                        lastSeen: String(Date.now() - 300000),
                        friendStatus: 'incomingRequest',
                    },
                    {
                        id: 5,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'blue',
                        lastSeen: String(Date.now()),
                        friendStatus: 'outcomingRequest',
                    },
                    {
                        id: 6,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'yellow',
                        lastSeen: String(Date.now() - 300000),
                        friendStatus: 'outcomingRequest',
                    },
                    {
                        id: 7,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'green',
                        lastSeen: String(Date.now()),
                        friendStatus: 'possibleFriend',
                    },
                    {
                        id: 8,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'teal',
                        lastSeen: String(Date.now() - 300000),
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

export const Default = Template.bind({});
Default.decorators = [
    StoreDecorator(
        {
            friends: {
                data: [
                    {
                        id: 1,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'indigo',
                        lastSeen: String(Date.now()),
                    },
                    {
                        id: 2,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'purple',
                        lastSeen: String(Date.now() - 300000),
                    },
                ],
                counts: { friends: 12, onlineFriends: 6, outcomingRequests: 3, incomingRequests: 1 },
                friendStatus: 'alreadyFriend',
                section: 'all',
            },
            user: { data: { id: 1 } },
        },
        { friends: friendsReducer, user: userReducer }
    ),
];
