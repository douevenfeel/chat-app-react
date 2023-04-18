import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { friendsReducer } from 'entities/Friends';
import { counts } from 'shared/config/storybook/const/data';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

import { FriendsHeader } from './FriendsHeader';

export default {
    title: 'widgets/FriendsHeader',
    component: FriendsHeader,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof FriendsHeader>;

const Template: ComponentStory<typeof FriendsHeader> = (args) => <FriendsHeader {...args} />;

export const AllFriends = Template.bind({});
AllFriends.decorators = [
    StoreDecorator({ friends: { friendStatus: 'alreadyFriend', section: 'all', counts } }, { friends: friendsReducer }),
];

export const OnlineFriends = Template.bind({});
OnlineFriends.decorators = [
    StoreDecorator(
        { friends: { friendStatus: 'alreadyFriend', section: 'online', counts } },
        { friends: friendsReducer }
    ),
];

export const OutcomingRequests = Template.bind({});
OutcomingRequests.decorators = [
    StoreDecorator({ friends: { friendStatus: 'outcomingRequest', counts } }, { friends: friendsReducer }),
];

export const IncomingRequests = Template.bind({});
IncomingRequests.decorators = [
    StoreDecorator({ friends: { friendStatus: 'incomingRequest', counts } }, { friends: friendsReducer }),
];
