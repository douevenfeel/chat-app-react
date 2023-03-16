import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { AcceptFriendRequest } from 'features/AcceptFriendRequest';
import { AddFriend } from 'features/AddFriend';
import { CancelFriendRequest } from 'features/CancelFriendRequest/ui/CancelFriendRequest';
import { DeleteFriend } from 'features/DeleteFriend';
import { EditProfile } from 'features/EditProfile';
import { SendMessage } from 'features/SendMessage';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

import { ProfileCard } from './ProfileCard';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        data: {
            id: 1,
            avatar: 'indigo',
            email: 'test@mail.ru',
            firstName: 'firstName',
            lastName: 'lastName',
        },
    },
    decorators: [StoreDecorator({})],
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Edit = Template.bind({});
Edit.args = {
    buttons: [<EditProfile key='editProfile' />],
};

export const SendMessageAddFriend = Template.bind({});
SendMessageAddFriend.args = {
    buttons: [
        <SendMessage
            id={1}
            key='sendMessage'
        />,
        <AddFriend
            id={1}
            key='addFriend'
        />,
    ],
};

export const SendMessageDeleteFriend = Template.bind({});
SendMessageDeleteFriend.args = {
    buttons: [
        <SendMessage
            id={1}
            key='sendMessage'
        />,
        <DeleteFriend
            id={1}
            key='deleteFriend'
        />,
    ],
};

export const SendMessageAcceptFriendRequest = Template.bind({});
SendMessageAcceptFriendRequest.args = {
    buttons: [
        <SendMessage
            id={1}
            key='sendMessage'
        />,
        <AcceptFriendRequest
            id={1}
            key='acceptFriendRequest'
        />,
    ],
};

export const SendMessageCancelFriendRequest = Template.bind({});
SendMessageCancelFriendRequest.args = {
    buttons: [
        <SendMessage
            id={1}
            key='sendMessage'
        />,
        <CancelFriendRequest
            id={1}
            key='cancelFriendRequest'
        />,
    ],
};
