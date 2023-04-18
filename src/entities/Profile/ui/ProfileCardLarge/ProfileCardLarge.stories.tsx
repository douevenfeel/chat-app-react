import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { ProfileUpdate } from 'features/ProfileUpdate';
import { ProfileUpdateInfoForm } from 'features/ProfileUpdateInfoForm';
import { SendMessage } from 'features/SendMessage';
import { UpdateFriendStatus } from 'features/UpdateFriendStatus';
import { user as data, firstName, lastName, lastSeen } from 'shared/config/storybook/const/data';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

import { profileReducer } from '../../model/slice/profileSlice';

import { ProfileCardLarge } from './ProfileCardLarge';

export default {
    title: 'entities/Profile/ProfileCardLarge',
    component: ProfileCardLarge,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCardLarge>;

const Template: ComponentStory<typeof ProfileCardLarge> = (args) => <ProfileCardLarge {...args} />;

export const UserVariant = Template.bind({});
UserVariant.args = { options: [<ProfileUpdate key='profileUpdate' />], data };

export const UpdatingEmpty = Template.bind({});
UpdatingEmpty.args = { options: [<ProfileUpdateInfoForm key='profileUpdateInfoForm' />], data };
UpdatingEmpty.decorators = [
    StoreDecorator({ profile: { updateInfoForm: { firstName: '', lastName: '' } } }, { profile: profileReducer }),
];

export const UpdatingWithData = Template.bind({});
UpdatingWithData.args = { options: [<ProfileUpdateInfoForm key='profileUpdateInfoForm' />], data };
UpdatingWithData.decorators = [
    StoreDecorator({ profile: { updateInfoForm: { firstName, lastName } } }, { profile: profileReducer }),
];

export const PossibleFriendVariantOffline = Template.bind({});
PossibleFriendVariantOffline.args = {
    options: [
        <SendMessage
            id={data.id}
            key='sendMessage'
        />,
        <UpdateFriendStatus
            friendStatus='possibleFriend'
            id={data.id}
            key='updateFriendStatus'
        />,
    ],
    data: { ...data, lastSeen: lastSeen(false) },
};

export const PossibleFriendVariantOnline = Template.bind({});
PossibleFriendVariantOnline.args = {
    options: [
        <SendMessage
            id={data.id}
            key='sendMessage'
        />,
        <UpdateFriendStatus
            friendStatus='possibleFriend'
            id={data.id}
            key='updateFriendStatus'
        />,
    ],
    data,
};

export const OutcomingFriendRequestVariantOffline = Template.bind({});
OutcomingFriendRequestVariantOffline.args = {
    options: [
        <SendMessage
            id={data.id}
            key='sendMessage'
        />,
        <UpdateFriendStatus
            friendStatus='outcomingRequest'
            id={data.id}
            key='updateFriendStatus'
        />,
    ],
    data: { ...data, lastSeen: lastSeen(false) },
};

export const OutcomingFriendRequestVariantOnline = Template.bind({});
OutcomingFriendRequestVariantOnline.args = {
    options: [
        <SendMessage
            id={data.id}
            key='sendMessage'
        />,
        <UpdateFriendStatus
            friendStatus='outcomingRequest'
            id={data.id}
            key='updateFriendStatus'
        />,
    ],
    data,
};

export const IncomingFriendRequestVariantOffline = Template.bind({});
IncomingFriendRequestVariantOffline.args = {
    options: [
        <SendMessage
            id={data.id}
            key='sendMessage'
        />,
        <UpdateFriendStatus
            friendStatus='incomingRequest'
            id={data.id}
            key='updateFriendStatus'
        />,
    ],
    data: { ...data, lastSeen: lastSeen(false) },
};

export const IncomingFriendRequestVariantOnline = Template.bind({});
IncomingFriendRequestVariantOnline.args = {
    options: [
        <SendMessage
            id={data.id}
            key='sendMessage'
        />,
        <UpdateFriendStatus
            friendStatus='incomingRequest'
            id={data.id}
            key='updateFriendStatus'
        />,
    ],
    data,
};

export const AlreadyFriendVariantOffline = Template.bind({});
AlreadyFriendVariantOffline.args = {
    options: [
        <SendMessage
            id={data.id}
            key='sendMessage'
        />,
        <UpdateFriendStatus
            friendStatus='alreadyFriend'
            id={data.id}
            key='updateFriendStatus'
        />,
    ],
    data: { ...data, lastSeen: lastSeen(false) },
};

export const AlreadyFriendVariantOnline = Template.bind({});
AlreadyFriendVariantOnline.args = {
    options: [
        <SendMessage
            id={data.id}
            key='sendMessage'
        />,
        <UpdateFriendStatus
            friendStatus='alreadyFriend'
            id={data.id}
            key='updateFriendStatus'
        />,
    ],
    data,
};
