import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { friendsReducer } from 'entities/Friends';
import { user } from 'shared/config/storybook/const/data';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import type { User } from 'shared/types/User';

import { Friends } from './Friends';

export default {
    title: 'widgets/Friends/Friends',
    component: Friends,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Friends>;

const Template: ComponentStory<typeof Friends> = () => <Friends />;

const data: DeepPartial<User>[] = [
    { ...user },
    { ...user, id: 2 },
    { ...user, id: 3 },
    { ...user, id: 4 },
    { ...user, id: 5 },
];

export const Default = Template.bind({});
Default.decorators = [StoreDecorator({ friends: { data } }, { friends: friendsReducer })];

export const OutcomingRequests = Template.bind({});
OutcomingRequests.decorators = [
    StoreDecorator({ friends: { data, friendStatus: 'outcomingRequest' } }, { friends: friendsReducer }),
];

export const EmptyOutcomingRequestsSearch = Template.bind({});
EmptyOutcomingRequestsSearch.decorators = [
    StoreDecorator(
        { friends: { data: [], friendStatus: 'outcomingRequest', search: 'search' } },
        { friends: friendsReducer }
    ),
];

export const IncomingRequests = Template.bind({});
IncomingRequests.decorators = [
    StoreDecorator({ friends: { data, friendStatus: 'incomingRequest' } }, { friends: friendsReducer }),
];

export const EmptyIncomingRequestsSearch = Template.bind({});
EmptyIncomingRequestsSearch.decorators = [
    StoreDecorator(
        { friends: { data: [], friendStatus: 'incomingRequest', search: 'search' } },
        { friends: friendsReducer }
    ),
];

export const AlreadyFriends = Template.bind({});
AlreadyFriends.decorators = [
    StoreDecorator({ friends: { data, friendStatus: 'alreadyFriend', section: 'all' } }, { friends: friendsReducer }),
];

export const EmptyAlreadyFriendsSearch = Template.bind({});
EmptyAlreadyFriendsSearch.decorators = [
    StoreDecorator(
        { friends: { data: [], friendStatus: 'alreadyFriend', section: 'all', search: 'search' } },
        { friends: friendsReducer }
    ),
];

export const AlreadyFriendsOnline = Template.bind({});
AlreadyFriendsOnline.decorators = [
    StoreDecorator(
        { friends: { data, friendStatus: 'alreadyFriend', section: 'online' } },
        { friends: friendsReducer }
    ),
];

export const EmptyAlreadyFriendsOnlineSearch = Template.bind({});
EmptyAlreadyFriendsOnlineSearch.decorators = [
    StoreDecorator(
        { friends: { data: [], friendStatus: 'alreadyFriend', section: 'online', search: 'search' } },
        { friends: friendsReducer }
    ),
];
