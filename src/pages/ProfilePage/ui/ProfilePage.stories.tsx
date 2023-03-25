import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { profileReducer } from 'entities/Profile';
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
        },
        { profile: profileReducer }
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
        },
        { profile: profileReducer }
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
        },
        { profile: profileReducer }
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
                    friendStatus: 'accept',
                },
            },
        },
        { profile: profileReducer }
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
                    friendStatus: 'accept',
                },
            },
        },
        { profile: profileReducer }
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
                    friendStatus: 'add',
                },
            },
        },
        { profile: profileReducer }
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
                    friendStatus: 'add',
                },
            },
        },
        { profile: profileReducer }
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
                    friendStatus: 'cancel',
                },
            },
        },
        { profile: profileReducer }
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
                    friendStatus: 'cancel',
                },
            },
        },
        { profile: profileReducer }
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
                    friendStatus: 'delete',
                },
            },
        },
        { profile: profileReducer }
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
                    friendStatus: 'delete',
                },
            },
        },
        { profile: profileReducer }
    ),
];
