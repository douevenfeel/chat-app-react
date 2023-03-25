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

export const FriendsOffline = Template.bind({});
FriendsOffline.decorators = [
    StoreDecorator(
        {
            friends: {
                data: [
                    {
                        id: 1,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'indigo',
                        onlineInfo: { isOnline: false, lastSeen: String(Date.now() - 300000) },
                    },
                    {
                        id: 2,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'purple',
                        onlineInfo: { isOnline: false, lastSeen: String(Date.now() - 300000) },
                    },
                    {
                        id: 3,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'blue',
                        onlineInfo: { isOnline: false, lastSeen: String(Date.now() - 300000) },
                    },
                    {
                        id: 4,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'red',
                        onlineInfo: { isOnline: false, lastSeen: String(Date.now() - 300000) },
                    },
                    {
                        id: 5,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'green',
                        onlineInfo: { isOnline: false, lastSeen: String(Date.now() - 300000) },
                    },
                ],
            },
            user: { data: { id: 1 } },
        },
        { friends: friendsReducer, user: userReducer }
    ),
];

export const FriendsMixed = Template.bind({});
FriendsMixed.decorators = [
    StoreDecorator(
        {
            friends: {
                data: [
                    {
                        id: 1,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'indigo',
                        onlineInfo: { isOnline: false, lastSeen: String(Date.now() - 300000) },
                    },
                    {
                        id: 2,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'purple',
                        onlineInfo: { isOnline: true, lastSeen: String(Date.now()) },
                    },
                    {
                        id: 3,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'blue',
                        onlineInfo: { isOnline: true, lastSeen: String(Date.now()) },
                    },
                    {
                        id: 4,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'red',
                        onlineInfo: { isOnline: false, lastSeen: String(Date.now() - 300000) },
                    },
                    {
                        id: 5,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'green',
                        onlineInfo: { isOnline: false, lastSeen: String(Date.now() - 300000) },
                    },
                ],
            },
            user: { data: { id: 1 } },
        },
        { friends: friendsReducer, user: userReducer }
    ),
];

export const FriendsOnline = Template.bind({});
FriendsOnline.decorators = [
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
                    },
                    {
                        id: 2,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'purple',
                        onlineInfo: { isOnline: true, lastSeen: String(Date.now()) },
                    },
                    {
                        id: 3,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'blue',
                        onlineInfo: { isOnline: true, lastSeen: String(Date.now()) },
                    },
                    {
                        id: 4,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'red',
                        onlineInfo: { isOnline: true, lastSeen: String(Date.now()) },
                    },
                    {
                        id: 5,
                        firstName: 'firstName',
                        lastName: 'lastName',
                        avatar: 'green',
                        onlineInfo: { isOnline: true, lastSeen: String(Date.now()) },
                    },
                ],
            },
            user: { data: { id: 1 } },
        },
        { friends: friendsReducer, user: userReducer }
    ),
];
