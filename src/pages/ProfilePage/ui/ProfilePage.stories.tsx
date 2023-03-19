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
                    email: 'test@mail.ru',
                    firstName: 'firstName',
                    lastName: 'lastName',
                    avatar: 'indigo',
                },
            },
        },
        { profile: profileReducer }
    ),
];

export const AcceptFriendRequestVariant = Template.bind({});
AcceptFriendRequestVariant.decorators = [
    StoreDecorator(
        {
            profile: {
                data: {
                    id: 1,
                    email: 'test@mail.ru',
                    firstName: 'firstName',
                    lastName: 'lastName',
                    avatar: 'indigo',
                    friendStatus: 'accept',
                },
            },
        },
        { profile: profileReducer }
    ),
];

export const AddFriendVariant = Template.bind({});
AddFriendVariant.decorators = [
    StoreDecorator(
        {
            profile: {
                data: {
                    id: 1,
                    email: 'test@mail.ru',
                    firstName: 'firstName',
                    lastName: 'lastName',
                    avatar: 'indigo',
                    friendStatus: 'add',
                },
            },
        },
        { profile: profileReducer }
    ),
];

export const CancelFriendRequestVariant = Template.bind({});
CancelFriendRequestVariant.decorators = [
    StoreDecorator(
        {
            profile: {
                data: {
                    id: 1,
                    email: 'test@mail.ru',
                    firstName: 'firstName',
                    lastName: 'lastName',
                    avatar: 'indigo',
                    friendStatus: 'cancel',
                },
            },
        },
        { profile: profileReducer }
    ),
];

export const DeleteFriendVariant = Template.bind({});
DeleteFriendVariant.decorators = [
    StoreDecorator(
        {
            profile: {
                data: {
                    id: 1,
                    email: 'test@mail.ru',
                    firstName: 'firstName',
                    lastName: 'lastName',
                    avatar: 'indigo',
                    friendStatus: 'delete',
                },
            },
        },
        { profile: profileReducer }
    ),
];
