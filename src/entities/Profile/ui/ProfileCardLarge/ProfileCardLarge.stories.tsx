import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { AcceptFriendRequest } from 'features/AcceptFriendRequest';
import { AddFriend } from 'features/AddFriend';
import { CancelFriendRequest } from 'features/CancelFriendRequest/ui/CancelFriendRequest';
import { DeleteFriend } from 'features/DeleteFriend';
import { ProfileUpdate } from 'features/ProfileUpdate/ui/ProfileUpdate';
import { ProfileUpdateInfoForm } from 'features/ProfileUpdateInfoForm';
import { SendMessage } from 'features/SendMessage';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

import { profileReducer } from '../../model/slice/profileSlice';

import { ProfileCardLarge } from './ProfileCardLarge';

export default {
    title: 'entities/Profile/ProfileCardLarge',
    component: ProfileCardLarge,
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
} as ComponentMeta<typeof ProfileCardLarge>;

const Template: ComponentStory<typeof ProfileCardLarge> = (args) => <ProfileCardLarge {...args} />;

export const UserVariant = Template.bind({});
UserVariant.args = {
    options: [<ProfileUpdate key='profileUpdate' />],
};

export const UpdatingEmpty = Template.bind({});
UpdatingEmpty.args = {
    options: [<ProfileUpdateInfoForm key='profileUpdateInfoForm' />],
};

export const UpdatingWithData = Template.bind({});
UpdatingWithData.args = {
    options: [<ProfileUpdateInfoForm key='profileUpdateInfoForm' />],
};
UpdatingWithData.decorators = [
    StoreDecorator(
        { profile: { updateInfoForm: { firstName: 'firstName', lastName: 'lastName' } } },
        { profile: profileReducer }
    ),
];

export const AcceptFriendRequestVariant = Template.bind({});
AcceptFriendRequestVariant.args = {
    options: [
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

export const AddFriendVariant = Template.bind({});
AddFriendVariant.args = {
    options: [
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

export const CancelFriendRequestVariant = Template.bind({});
CancelFriendRequestVariant.args = {
    options: [
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

export const DeleteFriendVariant = Template.bind({});
DeleteFriendVariant.args = {
    options: [
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
