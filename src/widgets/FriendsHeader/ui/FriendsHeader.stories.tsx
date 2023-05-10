import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { friendsReducer } from 'entities/Friends';
import { friendsCounts } from 'shared/config/storybook/const/data';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

import { FriendsHeader } from './FriendsHeader';

export default {
    title: 'widgets/FriendsHeader',
    component: FriendsHeader,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof FriendsHeader>;

const Template: ComponentStory<typeof FriendsHeader> = () => <FriendsHeader />;

export const AllFriends = Template.bind({});
AllFriends.decorators = [
    StoreDecorator(
        { friends: { friendStatus: 'alreadyFriend', section: 'all', counts: friendsCounts } },
        { friends: friendsReducer }
    ),
];

export const OnlineFriends = Template.bind({});
OnlineFriends.decorators = [
    StoreDecorator(
        { friends: { friendStatus: 'alreadyFriend', section: 'online', counts: friendsCounts } },
        { friends: friendsReducer }
    ),
];

export const OutcomingRequests = Template.bind({});
OutcomingRequests.decorators = [
    StoreDecorator(
        { friends: { friendStatus: 'outcomingRequest', counts: friendsCounts } },
        { friends: friendsReducer }
    ),
];

export const IncomingRequests = Template.bind({});
IncomingRequests.decorators = [
    StoreDecorator(
        { friends: { friendStatus: 'incomingRequest', counts: friendsCounts } },
        { friends: friendsReducer }
    ),
];
