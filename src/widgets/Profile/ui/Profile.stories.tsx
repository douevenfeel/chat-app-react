import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { profileReducer } from 'entities/Proflie';
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
