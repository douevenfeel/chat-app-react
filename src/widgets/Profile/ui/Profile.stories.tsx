import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { profileReducer } from 'entities/Profile';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

import { Profile } from './Profile';

export default {
    title: 'widgets/Profile',
    component: Profile,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Profile>;

const Template: ComponentStory<typeof Profile> = () => <Profile />;

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
                    friendStatus: 2,
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
                    friendStatus: 2,
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
                    friendStatus: 0,
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
                    friendStatus: 0,
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
                    friendStatus: 1,
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
                    friendStatus: 1,
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
                    friendStatus: 4,
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
                    friendStatus: 4,
                },
            },
        },
        { profile: profileReducer }
    ),
];
