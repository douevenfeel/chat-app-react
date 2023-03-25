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

export const AcceptFriendRequestVariantOffline = Template.bind({});
AcceptFriendRequestVariantOffline.decorators = [
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
                    friendStatus: 2,
                },
            },
            user: { data: { id: 1 } },
        },
        { profile: profileReducer, user: userReducer }
    ),
];

export const AcceptFriendRequestVariantOnline = Template.bind({});
AcceptFriendRequestVariantOnline.decorators = [
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
                    friendStatus: 2,
                },
            },
            user: { data: { id: 1 } },
        },
        { profile: profileReducer, user: userReducer }
    ),
];

export const AddFriendVariantOffline = Template.bind({});
AddFriendVariantOffline.decorators = [
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
                    friendStatus: 0,
                },
            },
            user: { data: { id: 1 } },
        },
        { profile: profileReducer, user: userReducer }
    ),
];

export const AddFriendVariantOnline = Template.bind({});
AddFriendVariantOnline.decorators = [
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
                    friendStatus: 0,
                },
            },
            user: { data: { id: 1 } },
        },
        { profile: profileReducer, user: userReducer }
    ),
];

export const CancelFriendRequestVariantOffline = Template.bind({});
CancelFriendRequestVariantOffline.decorators = [
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
                    friendStatus: 1,
                },
            },
            user: { data: { id: 1 } },
        },
        { profile: profileReducer, user: userReducer }
    ),
];

export const CancelFriendRequestVariantOnline = Template.bind({});
CancelFriendRequestVariantOnline.decorators = [
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
                    friendStatus: 1,
                },
            },
            user: { data: { id: 1 } },
        },
        { profile: profileReducer, user: userReducer }
    ),
];

export const DeleteFriendVariantOffline = Template.bind({});
DeleteFriendVariantOffline.decorators = [
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
                    friendStatus: 4,
                },
            },
            user: { data: { id: 1 } },
        },
        { profile: profileReducer, user: userReducer }
    ),
];

export const DeleteFriendVariantOnline = Template.bind({});
DeleteFriendVariantOnline.decorators = [
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
                    friendStatus: 4,
                },
            },
            user: { data: { id: 1 } },
        },
        { profile: profileReducer, user: userReducer }
    ),
];
