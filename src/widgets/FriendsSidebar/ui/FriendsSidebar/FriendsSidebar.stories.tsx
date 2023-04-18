import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { friendsReducer } from 'entities/Friends';
import { counts, user as profile } from 'shared/config/storybook/const/data';
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
    StoreDecorator({ friends: { friendStatus: 'alreadyFriend', counts, profile } }, { friends: friendsReducer }),
];

export const OutcomingRequests = Template.bind({});
OutcomingRequests.decorators = [
    StoreDecorator(
        {
            friends: { friendStatus: 'outcomingRequest', counts, profile },
        },
        { friends: friendsReducer }
    ),
];

export const IncomingRequests = Template.bind({});
IncomingRequests.decorators = [
    StoreDecorator({ friends: { friendStatus: 'incomingRequest', counts, profile } }, { friends: friendsReducer }),
];
