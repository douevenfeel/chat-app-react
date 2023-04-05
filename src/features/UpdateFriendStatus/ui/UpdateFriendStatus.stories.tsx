import type { ComponentStory, ComponentMeta } from '@storybook/react';

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
PossibleFriend.args = {
    id: 1,
    friendStatus: 'possibleFriend',
};

export const OutcomingRequest = Template.bind({});
OutcomingRequest.args = {
    id: 1,
    friendStatus: 'outcomingRequest',
};

export const IncomingRequest = Template.bind({});
IncomingRequest.args = {
    id: 1,
    friendStatus: 'incomingRequest',
};

export const AlreadyFriend = Template.bind({});
AlreadyFriend.args = {
    id: 1,
    friendStatus: 'alreadyFriend',
};
