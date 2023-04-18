import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { id } from 'shared/config/storybook/const/data';

import { UpdateFriendStatus } from './UpdateFriendStatus';
export default {
    title: 'features/UpdateFriendStatus',
    component: UpdateFriendStatus,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof UpdateFriendStatus>;

const Template: ComponentStory<typeof UpdateFriendStatus> = (args) => <UpdateFriendStatus {...args} />;

export const PossibleFriend = Template.bind({});
PossibleFriend.args = { id, friendStatus: 'possibleFriend' };

export const OutcomingRequest = Template.bind({});
OutcomingRequest.args = { id, friendStatus: 'outcomingRequest' };

export const IncomingRequest = Template.bind({});
IncomingRequest.args = { id, friendStatus: 'incomingRequest' };

export const AlreadyFriend = Template.bind({});
AlreadyFriend.args = { id, friendStatus: 'alreadyFriend' };
