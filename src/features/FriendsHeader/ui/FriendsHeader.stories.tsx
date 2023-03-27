import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { friendsReducer } from 'entities/Friends';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

import { FriendsHeader } from './FriendsHeader';

export default {
    title: 'features/FriendsHeader',
    component: FriendsHeader,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof FriendsHeader>;

const Template: ComponentStory<typeof FriendsHeader> = (args) => <FriendsHeader {...args} />;

export const AllFriends = Template.bind({});
AllFriends.decorators = [
    StoreDecorator(
        { friends: { friendStatus: 'alreadyFriend', section: 'all', counts: { friends: 12, onlineFriends: 6 } } },
        { friends: friendsReducer }
    ),
];

export const OnlineFriends = Template.bind({});
OnlineFriends.decorators = [
    StoreDecorator(
        { friends: { friendStatus: 'alreadyFriend', section: 'online', counts: { friends: 12, onlineFriends: 6 } } },
        { friends: friendsReducer }
    ),
];

export const OutcomingRequests = Template.bind({});
OutcomingRequests.decorators = [
    StoreDecorator(
        { friends: { friendStatus: 'outcomingRequest', counts: { outcomingRequests: 3 } } },
        { friends: friendsReducer }
    ),
];

export const IncomingRequests = Template.bind({});
IncomingRequests.decorators = [
    StoreDecorator(
        { friends: { friendStatus: 'incomingRequest', counts: { incomingRequests: 2 } } },
        { friends: friendsReducer }
    ),
];

export const PossibleFriends = Template.bind({});
PossibleFriends.decorators = [
    StoreDecorator({ friends: { friendStatus: 'possibleFriend' } }, { friends: friendsReducer }),
];
