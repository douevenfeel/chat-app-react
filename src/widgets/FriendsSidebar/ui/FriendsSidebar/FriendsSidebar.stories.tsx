import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { friendsReducer } from 'entities/Friends';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

import { FriendsSidebar } from './FriendsSidebar';

export default {
    title: 'widgets/FriendsSidebar',
    component: FriendsSidebar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof FriendsSidebar>;

const Template: ComponentStory<typeof FriendsSidebar> = (args) => <FriendsSidebar {...args} />;

export const Friends = Template.bind({});
Friends.decorators = [
    StoreDecorator(
        {
            friends: {
                friendStatus: 'alreadyFriend',
                counts: { friends: 12, onlineFriends: 6, outcomingRequests: 3, incomingRequests: 1 },
                profile: {
                    id: 1,
                    email: 'test@mail.ru',
                    firstName: 'firstName',
                    lastName: 'lastName',
                    avatar: 'purple',
                    lastSeen: String(Date.now()),
                },
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
                friendStatus: 'outcomingRequest',
                counts: { friends: 12, onlineFriends: 6, outcomingRequests: 3, incomingRequests: 1 },
                profile: {
                    id: 1,
                    email: 'test@mail.ru',
                    firstName: 'firstName',
                    lastName: 'lastName',
                    avatar: 'purple',
                    lastSeen: String(Date.now()),
                },
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
                friendStatus: 'incomingRequest',
                counts: { friends: 12, onlineFriends: 6, outcomingRequests: 3, incomingRequests: 1 },
                profile: {
                    id: 1,
                    email: 'test@mail.ru',
                    firstName: 'firstName',
                    lastName: 'lastName',
                    avatar: 'purple',
                    lastSeen: String(Date.now()),
                },
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
                friendStatus: 'possibleFriend',
                counts: { friends: 12, onlineFriends: 6, outcomingRequests: 3, incomingRequests: 1 },
                profile: {
                    id: 1,
                    email: 'test@mail.ru',
                    firstName: 'firstName',
                    lastName: 'lastName',
                    avatar: 'purple',
                    lastSeen: String(Date.now()),
                },
            },
        },
        { friends: friendsReducer }
    ),
];
