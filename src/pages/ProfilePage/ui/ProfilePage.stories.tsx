import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { profileReducer } from 'entities/Profile';
import { userReducer } from 'entities/User';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

import ProfilePage from './ProfilePage';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage />;

export const UserVariant = Template.bind({});
UserVariant.decorators = [
    StoreDecorator(
        {
            profile: {
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
            },
            user: { data: { id: 1 } },
        },
        { profile: profileReducer, user: userReducer }
    ),
];

export const UpdatingEmpty = Template.bind({});
UpdatingEmpty.decorators = [
    StoreDecorator(
        {
            profile: {
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
                updateInfoForm: {
                    firstName: '',
                    lastName: '',
                },
                isUpdatingInfo: true,
            },
            user: { data: { id: 1 } },
        },
        { profile: profileReducer, user: userReducer }
    ),
];

export const UpdatingWithData = Template.bind({});
UpdatingWithData.decorators = [
    StoreDecorator(
        {
            profile: {
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
                updateInfoForm: {
                    firstName: 'firstName',
                    lastName: 'lastName',
                },
                isUpdatingInfo: true,
            },
            user: { data: { id: 1 } },
        },
        { profile: profileReducer, user: userReducer }
    ),
];

export const PossibleFriendVariantOffline = Template.bind({});
PossibleFriendVariantOffline.decorators = [
    StoreDecorator(
        {
            profile: {
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
                    friendStatus: 'possibleFriend',
                },
            },
            user: { data: { id: 1 } },
        },
        { profile: profileReducer, user: userReducer }
    ),
];

export const PossibleFriendVariantOnline = Template.bind({});
PossibleFriendVariantOnline.decorators = [
    StoreDecorator(
        {
            profile: {
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
                    friendStatus: 'possibleFriend',
                },
            },
            user: { data: { id: 1 } },
        },
        { profile: profileReducer, user: userReducer }
    ),
];

export const OutcomingFriendRequestVariantOffline = Template.bind({});
OutcomingFriendRequestVariantOffline.decorators = [
    StoreDecorator(
        {
            profile: {
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
                    friendStatus: 'outcomingRequest',
                },
            },
            user: { data: { id: 1 } },
        },
        { profile: profileReducer, user: userReducer }
    ),
];

export const OutcomingFriendRequestVariantOnline = Template.bind({});
OutcomingFriendRequestVariantOnline.decorators = [
    StoreDecorator(
        {
            profile: {
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
                    friendStatus: 'outcomingRequest',
                },
            },
            user: { data: { id: 1 } },
        },
        { profile: profileReducer, user: userReducer }
    ),
];

export const IncomingFriendRequestVariantOffline = Template.bind({});
IncomingFriendRequestVariantOffline.decorators = [
    StoreDecorator(
        {
            profile: {
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
                    friendStatus: 'incomingRequest',
                },
            },
            user: { data: { id: 1 } },
        },
        { profile: profileReducer, user: userReducer }
    ),
];

export const IncomingFriendRequestVariantOnline = Template.bind({});
IncomingFriendRequestVariantOnline.decorators = [
    StoreDecorator(
        {
            profile: {
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
                    friendStatus: 'incomingRequest',
                },
            },
            user: { data: { id: 1 } },
        },
        { profile: profileReducer, user: userReducer }
    ),
];

export const AlreadyFriendVariantOffline = Template.bind({});
AlreadyFriendVariantOffline.decorators = [
    StoreDecorator(
        {
            profile: {
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
                    friendStatus: 'alreadyFriend',
                },
            },
            user: { data: { id: 1 } },
        },
        { profile: profileReducer, user: userReducer }
    ),
];

export const AlreadyFriendVariantOnline = Template.bind({});
AlreadyFriendVariantOnline.decorators = [
    StoreDecorator(
        {
            profile: {
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
                    friendStatus: 'alreadyFriend',
                },
            },
            user: { data: { id: 1 } },
        },
        { profile: profileReducer, user: userReducer }
    ),
];
