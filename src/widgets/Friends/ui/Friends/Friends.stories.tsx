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
                        onlineInfo: { lastSeen: String(Date.now()) },
                        friendStatus: 'possibleFriend',
                    },
                    {
                        id: 2,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'purple',
                        onlineInfo: { lastSeen: String(Date.now()) },
                        friendStatus: 'possibleFriend',
                    },
                    {
                        id: 3,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'blue',
                        onlineInfo: { lastSeen: String(Date.now()) },
                        friendStatus: 'possibleFriend',
                    },
                    {
                        id: 4,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'red',
                        onlineInfo: { lastSeen: String(Date.now() - 300000) },
                        friendStatus: 'possibleFriend',
                    },
                    {
                        id: 5,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'green',
                        onlineInfo: { lastSeen: String(Date.now() - 300000) },
                        friendStatus: 'possibleFriend',
                    },
                ],
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
                        onlineInfo: { lastSeen: String(Date.now()) },
                        friendStatus: 'outcomingRequest',
                    },
                    {
                        id: 2,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'purple',
                        onlineInfo: { lastSeen: String(Date.now()) },
                        friendStatus: 'outcomingRequest',
                    },
                    {
                        id: 3,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'blue',
                        onlineInfo: { lastSeen: String(Date.now()) },
                        friendStatus: 'outcomingRequest',
                    },
                    {
                        id: 4,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'red',
                        onlineInfo: { lastSeen: String(Date.now() - 300000) },
                        friendStatus: 'outcomingRequest',
                    },
                    {
                        id: 5,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'green',
                        onlineInfo: { lastSeen: String(Date.now() - 300000) },
                        friendStatus: 'outcomingRequest',
                    },
                ],
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
                        onlineInfo: { lastSeen: String(Date.now()) },
                        friendStatus: 'incomingRequest',
                    },
                    {
                        id: 2,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'purple',
                        onlineInfo: { lastSeen: String(Date.now()) },
                        friendStatus: 'incomingRequest',
                    },
                    {
                        id: 3,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'blue',
                        onlineInfo: { lastSeen: String(Date.now()) },
                        friendStatus: 'incomingRequest',
                    },
                    {
                        id: 4,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'red',
                        onlineInfo: { lastSeen: String(Date.now() - 300000) },
                        friendStatus: 'incomingRequest',
                    },
                    {
                        id: 5,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'green',
                        onlineInfo: { lastSeen: String(Date.now() - 300000) },
                        friendStatus: 'incomingRequest',
                    },
                ],
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
                        onlineInfo: { lastSeen: String(Date.now()) },
                        friendStatus: 'alreadyFriend',
                    },
                    {
                        id: 2,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'purple',
                        onlineInfo: { lastSeen: String(Date.now()) },
                        friendStatus: 'alreadyFriend',
                    },
                    {
                        id: 3,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'blue',
                        onlineInfo: { lastSeen: String(Date.now()) },
                        friendStatus: 'alreadyFriend',
                    },
                    {
                        id: 4,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'red',
                        onlineInfo: { lastSeen: String(Date.now() - 300000) },
                        friendStatus: 'alreadyFriend',
                    },
                    {
                        id: 5,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'green',
                        onlineInfo: { lastSeen: String(Date.now() - 300000) },
                        friendStatus: 'alreadyFriend',
                    },
                ],
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
                        onlineInfo: { lastSeen: String(Date.now()) },
                        friendStatus: 'alreadyFriend',
                    },
                    {
                        id: 2,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'purple',
                        onlineInfo: { lastSeen: String(Date.now() - 300000) },

                        friendStatus: 'alreadyFriend',
                    },
                    {
                        id: 3,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'red',
                        onlineInfo: { lastSeen: String(Date.now()) },
                        friendStatus: 'incomingRequest',
                    },
                    {
                        id: 4,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'orange',
                        onlineInfo: { lastSeen: String(Date.now() - 300000) },

                        friendStatus: 'incomingRequest',
                    },
                    {
                        id: 5,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'blue',
                        onlineInfo: { lastSeen: String(Date.now()) },
                        friendStatus: 'outcomingRequest',
                    },
                    {
                        id: 6,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'yellow',
                        onlineInfo: { lastSeen: String(Date.now() - 300000) },

                        friendStatus: 'outcomingRequest',
                    },
                    {
                        id: 7,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'green',
                        onlineInfo: { lastSeen: String(Date.now()) },
                        friendStatus: 'possibleFriend',
                    },
                    {
                        id: 8,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'teal',
                        onlineInfo: { lastSeen: String(Date.now() - 300000) },

                        friendStatus: 'possibleFriend',
                    },
                ],
            },
        },
        { friends: friendsReducer }
    ),
];
