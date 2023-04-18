import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { friendsReducer } from 'entities/Friends';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

import { Friends } from './Friends';

export default {
    title: 'widgets/Friends/Friends',
    component: Friends,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Friends>;

const Template: ComponentStory<typeof Friends> = () => <Friends />;

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
                        lastSeen: String(Date.now()),
                    },
                    {
                        id: 3,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'blue',
                        lastSeen: String(Date.now()),
                    },
                    {
                        id: 4,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'red',
                        lastSeen: String(Date.now() - 300000),
                    },
                    {
                        id: 5,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'green',
                        lastSeen: String(Date.now() - 300000),
                    },
                ],
            },
        },
        { friends: friendsReducer }
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
                        lastSeen: String(Date.now()),
                        friendStatus: 'possibleFriend',
                    },
                    {
                        id: 2,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'purple',
                        lastSeen: String(Date.now()),
                        friendStatus: 'possibleFriend',
                    },
                    {
                        id: 3,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'blue',
                        lastSeen: String(Date.now()),
                        friendStatus: 'possibleFriend',
                    },
                    {
                        id: 4,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'red',
                        lastSeen: String(Date.now() - 300000),
                        friendStatus: 'possibleFriend',
                    },
                    {
                        id: 5,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'green',
                        lastSeen: String(Date.now() - 300000),
                        friendStatus: 'possibleFriend',
                    },
                ],
            },
        },
        { friends: friendsReducer }
    ),
];

export const EmptyPossibleFriends = Template.bind({});
EmptyPossibleFriends.decorators = [
    StoreDecorator(
        {
            friends: {
                data: [],
                friendStatus: 'possibleFriend',
            },
        },
        { friends: friendsReducer }
    ),
];

export const OutcomingRequests = Template.bind({});
OutcomingRequests.decorators = [
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
                        friendStatus: 'outcomingRequest',
                    },
                    {
                        id: 2,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'purple',
                        lastSeen: String(Date.now()),
                        friendStatus: 'outcomingRequest',
                    },
                    {
                        id: 3,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'blue',
                        lastSeen: String(Date.now()),
                        friendStatus: 'outcomingRequest',
                    },
                    {
                        id: 4,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'red',
                        lastSeen: String(Date.now() - 300000),
                        friendStatus: 'outcomingRequest',
                    },
                    {
                        id: 5,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'green',
                        lastSeen: String(Date.now() - 300000),
                        friendStatus: 'outcomingRequest',
                    },
                ],
            },
        },
        { friends: friendsReducer }
    ),
];

export const EmptyOutcomingRequests = Template.bind({});
EmptyOutcomingRequests.decorators = [
    StoreDecorator(
        {
            friends: {
                data: [],
                friendStatus: 'outcomingRequest',
            },
        },
        { friends: friendsReducer }
    ),
];

export const EmptyOutcomingRequestsSearch = Template.bind({});
EmptyOutcomingRequestsSearch.decorators = [
    StoreDecorator(
        {
            friends: {
                data: [],
                friendStatus: 'outcomingRequest',
                search: 'search',
            },
        },
        { friends: friendsReducer }
    ),
];

export const IncomingRequests = Template.bind({});
IncomingRequests.decorators = [
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
                        friendStatus: 'incomingRequest',
                    },
                    {
                        id: 2,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'purple',
                        lastSeen: String(Date.now()),
                        friendStatus: 'incomingRequest',
                    },
                    {
                        id: 3,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'blue',
                        lastSeen: String(Date.now()),
                        friendStatus: 'incomingRequest',
                    },
                    {
                        id: 4,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'red',
                        lastSeen: String(Date.now() - 300000),
                        friendStatus: 'incomingRequest',
                    },
                    {
                        id: 5,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'green',
                        lastSeen: String(Date.now() - 300000),
                        friendStatus: 'incomingRequest',
                    },
                ],
            },
        },
        { friends: friendsReducer }
    ),
];

export const EmptyIncomingRequests = Template.bind({});
EmptyIncomingRequests.decorators = [
    StoreDecorator(
        {
            friends: {
                data: [],
                friendStatus: 'incomingRequest',
            },
        },
        { friends: friendsReducer }
    ),
];

export const EmptyIncomingRequestsSearch = Template.bind({});
EmptyIncomingRequestsSearch.decorators = [
    StoreDecorator(
        {
            friends: {
                data: [],
                friendStatus: 'incomingRequest',
                search: 'search',
            },
        },
        { friends: friendsReducer }
    ),
];

export const AlreadyFriends = Template.bind({});
AlreadyFriends.decorators = [
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
                        lastSeen: String(Date.now()),
                        friendStatus: 'alreadyFriend',
                    },
                    {
                        id: 3,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'blue',
                        lastSeen: String(Date.now()),
                        friendStatus: 'alreadyFriend',
                    },
                    {
                        id: 4,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'red',
                        lastSeen: String(Date.now() - 300000),
                        friendStatus: 'alreadyFriend',
                    },
                    {
                        id: 5,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'green',
                        lastSeen: String(Date.now() - 300000),
                        friendStatus: 'alreadyFriend',
                    },
                ],
            },
        },
        { friends: friendsReducer }
    ),
];

export const EmptyAlreadyFriends = Template.bind({});
EmptyAlreadyFriends.decorators = [
    StoreDecorator(
        {
            friends: {
                data: [],
                friendStatus: 'alreadyFriend',
                section: 'all',
            },
        },
        { friends: friendsReducer }
    ),
];

export const EmptyAlreadyFriendsSearch = Template.bind({});
EmptyAlreadyFriendsSearch.decorators = [
    StoreDecorator(
        {
            friends: {
                data: [],
                friendStatus: 'alreadyFriend',
                section: 'all',
                search: 'search',
            },
        },
        { friends: friendsReducer }
    ),
];

export const EmptyAlreadyFriendsOnline = Template.bind({});
EmptyAlreadyFriendsOnline.decorators = [
    StoreDecorator(
        {
            friends: {
                data: [],
                friendStatus: 'alreadyFriend',
                section: 'online',
            },
        },
        { friends: friendsReducer }
    ),
];

export const EmptyAlreadyFriendsOnlineSearch = Template.bind({});
EmptyAlreadyFriendsOnlineSearch.decorators = [
    StoreDecorator(
        {
            friends: {
                data: [],
                friendStatus: 'alreadyFriend',
                section: 'online',
                search: 'search',
            },
        },
        { friends: friendsReducer }
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
            },
        },
        { friends: friendsReducer }
    ),
];
