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
    decorators: [StoreDecorator({})],
} as ComponentMeta<typeof ProfileCardLarge>;

const Template: ComponentStory<typeof ProfileCardLarge> = (args) => <ProfileCardLarge {...args} />;

export const UserVariant = Template.bind({});
UserVariant.args = {
    options: [<ProfileUpdate key='profileUpdate' />],
    data: {
        id: 1,
        avatar: 'indigo',
        email: 'test@mail.ru',
        firstName: 'firstName',
        lastName: 'lastName',
        onlineInfo: {
            isOnline: true,
            lastSeen: String(Date.now()),
        },
    },
};

export const UpdatingEmpty = Template.bind({});
UpdatingEmpty.args = {
    options: [<ProfileUpdateInfoForm key='profileUpdateInfoForm' />],
    data: {
        id: 1,
        avatar: 'indigo',
        email: 'test@mail.ru',
        firstName: 'firstName',
        lastName: 'lastName',
        onlineInfo: {
            isOnline: true,
            lastSeen: String(Date.now()),
        },
    },
};

export const UpdatingWithData = Template.bind({});
UpdatingWithData.args = {
    options: [<ProfileUpdateInfoForm key='profileUpdateInfoForm' />],
    data: {
        id: 1,
        avatar: 'indigo',
        email: 'test@mail.ru',
        firstName: 'firstName',
        lastName: 'lastName',
        onlineInfo: {
            isOnline: true,
            lastSeen: String(Date.now()),
        },
    },
};
UpdatingWithData.decorators = [
    StoreDecorator(
        { profile: { updateInfoForm: { firstName: 'firstName', lastName: 'lastName' } } },
        { profile: profileReducer }
    ),
];

export const AcceptFriendRequestVariantOffline = Template.bind({});
AcceptFriendRequestVariantOffline.args = {
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
    data: {
        id: 1,
        avatar: 'indigo',
        email: 'test@mail.ru',
        firstName: 'firstName',
        lastName: 'lastName',
        onlineInfo: {
            isOnline: false,
            lastSeen: String(Date.now() - 300000),
        },
    },
};

export const AcceptFriendRequestVariantOnline = Template.bind({});
AcceptFriendRequestVariantOnline.args = {
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
    data: {
        id: 1,
        avatar: 'indigo',
        email: 'test@mail.ru',
        firstName: 'firstName',
        lastName: 'lastName',
        onlineInfo: {
            isOnline: true,
            lastSeen: String(Date.now()),
        },
    },
};

export const AddFriendVariantOffline = Template.bind({});
AddFriendVariantOffline.args = {
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
    data: {
        id: 1,
        avatar: 'indigo',
        email: 'test@mail.ru',
        firstName: 'firstName',
        lastName: 'lastName',
        onlineInfo: {
            isOnline: false,
            lastSeen: String(Date.now() - 300000),
        },
    },
};

export const AddFriendVariantOnline = Template.bind({});
AddFriendVariantOnline.args = {
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
    data: {
        id: 1,
        avatar: 'indigo',
        email: 'test@mail.ru',
        firstName: 'firstName',
        lastName: 'lastName',
        onlineInfo: {
            isOnline: true,
            lastSeen: String(Date.now()),
        },
    },
};

export const CancelFriendRequestVariantOffline = Template.bind({});
CancelFriendRequestVariantOffline.args = {
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
    data: {
        id: 1,
        avatar: 'indigo',
        email: 'test@mail.ru',
        firstName: 'firstName',
        lastName: 'lastName',
        onlineInfo: {
            isOnline: false,
            lastSeen: String(Date.now() - 300000),
        },
    },
};

export const CancelFriendRequestVariantOnline = Template.bind({});
CancelFriendRequestVariantOnline.args = {
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
    data: {
        id: 1,
        avatar: 'indigo',
        email: 'test@mail.ru',
        firstName: 'firstName',
        lastName: 'lastName',
        onlineInfo: {
            isOnline: true,
            lastSeen: String(Date.now()),
        },
    },
};

export const DeleteFriendVariantOffline = Template.bind({});
DeleteFriendVariantOffline.args = {
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
    data: {
        id: 1,
        avatar: 'indigo',
        email: 'test@mail.ru',
        firstName: 'firstName',
        lastName: 'lastName',
        onlineInfo: {
            isOnline: false,
            lastSeen: String(Date.now() - 300000),
        },
    },
};

export const DeleteFriendVariantOnline = Template.bind({});
DeleteFriendVariantOnline.args = {
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
    data: {
        id: 1,
        avatar: 'indigo',
        email: 'test@mail.ru',
        firstName: 'firstName',
        lastName: 'lastName',
        onlineInfo: {
            isOnline: true,
            lastSeen: String(Date.now()),
        },
    },
};
