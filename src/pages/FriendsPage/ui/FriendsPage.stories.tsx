import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { friendsReducer } from 'entities/Friends';
import { userReducer } from 'entities/User';
import { user as profile, friendsCounts } from 'shared/config/storybook/const/data';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import type { User } from 'shared/types/User';

import FriendsPage from './FriendsPage';

export default {
    title: 'pages/FriendsPage',
    component: FriendsPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof FriendsPage>;

const Template: ComponentStory<typeof FriendsPage> = () => <FriendsPage />;

const data: DeepPartial<User>[] = [
    { ...profile },
    { ...profile, id: 2 },
    { ...profile, id: 3 },
    { ...profile, id: 4 },
    { ...profile, id: 5 },
];

export const AllFriends = Template.bind({});
AllFriends.decorators = [
    StoreDecorator(
        {
            friends: { data, friendStatus: 'alreadyFriend', section: 'all', counts: friendsCounts, profile },
            user: { data: profile },
        },
        { friends: friendsReducer, user: userReducer }
    ),
];

export const EmptyAllFriendsSearch = Template.bind({});
EmptyAllFriendsSearch.decorators = [
    StoreDecorator(
        {
            friends: {
                data: [],
                friendStatus: 'alreadyFriend',
                section: 'all',
                counts: friendsCounts,
                profile,
                q: 'search',
            },
        },
        { friends: friendsReducer }
    ),
];

export const OnlineFriends = Template.bind({});
OnlineFriends.decorators = [
    StoreDecorator(
        {
            friends: { data, section: 'online', friendStatus: 'alreadyFriend', counts: friendsCounts, profile },
            user: { data: profile },
        },
        { friends: friendsReducer, user: userReducer }
    ),
];

export const EmptyOnlineFriendsSearch = Template.bind({});
EmptyOnlineFriendsSearch.decorators = [
    StoreDecorator(
        {
            friends: {
                data: [],
                friendStatus: 'alreadyFriend',
                section: 'online',
                counts: friendsCounts,
                profile,
                q: 'search',
            },
            user: { data: profile },
        },
        { friends: friendsReducer, user: userReducer }
    ),
];

export const OutcomingRequests = Template.bind({});
OutcomingRequests.decorators = [
    StoreDecorator(
        {
            friends: { data, friendStatus: 'outcomingRequest', counts: friendsCounts, profile },
            user: { data: profile },
        },
        { friends: friendsReducer, user: userReducer }
    ),
];

export const EmptyOutcomingRequestsSearch = Template.bind({});
EmptyOutcomingRequestsSearch.decorators = [
    StoreDecorator(
        {
            friends: {
                data: [],
                friendStatus: 'outcomingRequest',
                section: 'all',
                counts: friendsCounts,
                profile,
                q: 'search',
            },
            user: { data: profile },
        },
        { friends: friendsReducer, user: userReducer }
    ),
];

export const IncomingRequests = Template.bind({});
IncomingRequests.decorators = [
    StoreDecorator(
        {
            friends: { data, friendStatus: 'incomingRequest', counts: friendsCounts, profile },
            user: { data: profile },
        },
        { friends: friendsReducer, user: userReducer }
    ),
];

export const EmptyIncomingRequestsSearch = Template.bind({});
EmptyIncomingRequestsSearch.decorators = [
    StoreDecorator(
        {
            friends: {
                data: [],
                friendStatus: 'incomingRequest',
                section: 'all',
                counts: friendsCounts,
                profile,
                q: 'search',
            },
            user: { data: profile },
        },
        { friends: friendsReducer, user: userReducer }
    ),
];
