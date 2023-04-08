import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { ProfileUpdate } from 'features/ProfileUpdate';
import { ProfileUpdateInfoForm } from 'features/ProfileUpdateInfoForm';
import { SendMessage } from 'features/SendMessage';
import { UpdateFriendStatus } from 'features/UpdateFriendStatus';
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
UserVariant.args = {
    options: [<ProfileUpdate key='profileUpdate' />],
    data: {
        id: 1,
        avatar: 'indigo',
        email: 'test@mail.ru',
        firstName: 'firstName',
        lastName: 'lastName',
        friendStatus: undefined,
        onlineInfo: {
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
        friendStatus: undefined,
        onlineInfo: {
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
        friendStatus: undefined,
        onlineInfo: {
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

export const PossibleFriendVariantOffline = Template.bind({});
PossibleFriendVariantOffline.args = {
    options: [
        <SendMessage
            id={1}
            key='sendMessage'
        />,
        <UpdateFriendStatus
            friendStatus='possibleFriend'
            id={1}
            key='updateFriendStatus'
        />,
    ],
    data: {
        id: 1,
        avatar: 'indigo',
        email: 'test@mail.ru',
        firstName: 'firstName',
        lastName: 'lastName',
        friendStatus: 'possibleFriend',
        onlineInfo: {
            lastSeen: String(Date.now() - 300000),
        },
    },
};

export const PossibleFriendVariantOnline = Template.bind({});
PossibleFriendVariantOnline.args = {
    options: [
        <SendMessage
            id={1}
            key='sendMessage'
        />,
        <UpdateFriendStatus
            friendStatus='possibleFriend'
            id={1}
            key='updateFriendStatus'
        />,
    ],
    data: {
        id: 1,
        avatar: 'indigo',
        email: 'test@mail.ru',
        firstName: 'firstName',
        lastName: 'lastName',
        friendStatus: 'possibleFriend',
        onlineInfo: {
            lastSeen: String(Date.now()),
        },
    },
};

export const OutcomingFriendRequestVariantOffline = Template.bind({});
OutcomingFriendRequestVariantOffline.args = {
    options: [
        <SendMessage
            id={1}
            key='sendMessage'
        />,
        <UpdateFriendStatus
            friendStatus='outcomingRequest'
            id={1}
            key='updateFriendStatus'
        />,
    ],
    data: {
        id: 1,
        avatar: 'indigo',
        email: 'test@mail.ru',
        firstName: 'firstName',
        lastName: 'lastName',
        friendStatus: 'outcomingRequest',
        onlineInfo: {
            lastSeen: String(Date.now() - 300000),
        },
    },
};

export const OutcomingFriendRequestVariantOnline = Template.bind({});
OutcomingFriendRequestVariantOnline.args = {
    options: [
        <SendMessage
            id={1}
            key='sendMessage'
        />,
        <UpdateFriendStatus
            friendStatus='outcomingRequest'
            id={1}
            key='updateFriendStatus'
        />,
    ],
    data: {
        id: 1,
        avatar: 'indigo',
        email: 'test@mail.ru',
        firstName: 'firstName',
        lastName: 'lastName',
        friendStatus: 'outcomingRequest',
        onlineInfo: {
            lastSeen: String(Date.now()),
        },
    },
};

export const IncomingFriendRequestVariantOffline = Template.bind({});
IncomingFriendRequestVariantOffline.args = {
    options: [
        <SendMessage
            id={1}
            key='sendMessage'
        />,
        <UpdateFriendStatus
            friendStatus='incomingRequest'
            id={1}
            key='updateFriendStatus'
        />,
    ],
    data: {
        id: 1,
        avatar: 'indigo',
        email: 'test@mail.ru',
        firstName: 'firstName',
        lastName: 'lastName',
        friendStatus: 'incomingRequest',
        onlineInfo: {
            lastSeen: String(Date.now() - 300000),
        },
    },
};

export const IncomingFriendRequestVariantOnline = Template.bind({});
IncomingFriendRequestVariantOnline.args = {
    options: [
        <SendMessage
            id={1}
            key='sendMessage'
        />,
        <UpdateFriendStatus
            friendStatus='incomingRequest'
            id={1}
            key='updateFriendStatus'
        />,
    ],
    data: {
        id: 1,
        avatar: 'indigo',
        email: 'test@mail.ru',
        firstName: 'firstName',
        lastName: 'lastName',
        friendStatus: 'incomingRequest',
        onlineInfo: {
            lastSeen: String(Date.now()),
        },
    },
};

export const AlreadyFriendVariantOffline = Template.bind({});
AlreadyFriendVariantOffline.args = {
    options: [
        <SendMessage
            id={1}
            key='sendMessage'
        />,
        <UpdateFriendStatus
            friendStatus='alreadyFriend'
            id={1}
            key='updateFriendStatus'
        />,
    ],
    data: {
        id: 1,
        avatar: 'indigo',
        email: 'test@mail.ru',
        firstName: 'firstName',
        lastName: 'lastName',
        friendStatus: 'alreadyFriend',
        onlineInfo: {
            lastSeen: String(Date.now() - 300000),
        },
    },
};

export const AlreadyFriendVariantOnline = Template.bind({});
AlreadyFriendVariantOnline.args = {
    options: [
        <SendMessage
            id={1}
            key='sendMessage'
        />,
        <UpdateFriendStatus
            friendStatus='alreadyFriend'
            id={1}
            key='updateFriendStatus'
        />,
    ],
    data: {
        id: 1,
        avatar: 'indigo',
        email: 'test@mail.ru',
        firstName: 'firstName',
        lastName: 'lastName',
        friendStatus: 'alreadyFriend',
        onlineInfo: {
            lastSeen: String(Date.now()),
        },
    },
};
