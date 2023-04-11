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
                    lastSeen: String(Date.now()),
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
                    lastSeen: String(Date.now()),
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
                    lastSeen: String(Date.now()),
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
                    lastSeen: String(Date.now() - 300000),
                    friendStatus: 'possibleFriend',
                },
            },
        },
        { profile: profileReducer }
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
                    lastSeen: String(Date.now()),
                    friendStatus: 'possibleFriend',
                },
            },
        },
        { profile: profileReducer }
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
                    lastSeen: String(Date.now() - 300000),
                    friendStatus: 'outcomingRequest',
                },
            },
        },
        { profile: profileReducer }
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
                    lastSeen: String(Date.now()),
                    friendStatus: 'outcomingRequest',
                },
            },
        },
        { profile: profileReducer }
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
                    lastSeen: String(Date.now() - 300000),
                    friendStatus: 'incomingRequest',
                },
            },
        },
        { profile: profileReducer }
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
                    lastSeen: String(Date.now()),
                    friendStatus: 'incomingRequest',
                },
            },
        },
        { profile: profileReducer }
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
                    lastSeen: String(Date.now() - 300000),
                    friendStatus: 'alreadyFriend',
                },
            },
        },
        { profile: profileReducer }
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
                    lastSeen: String(Date.now()),
                    friendStatus: 'alreadyFriend',
                },
            },
        },
        { profile: profileReducer }
    ),
];
