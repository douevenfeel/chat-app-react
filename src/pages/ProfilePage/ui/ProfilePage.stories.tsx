import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { profileReducer } from 'entities/Profile';
import { userReducer } from 'entities/User';
import { user as data, firstName, lastName, lastSeen } from 'shared/config/storybook/const/data';
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
    StoreDecorator({ profile: { data }, user: { data } }, { profile: profileReducer, user: userReducer }),
];

export const UpdatingEmpty = Template.bind({});
UpdatingEmpty.decorators = [
    StoreDecorator(
        { profile: { data, updateInfoForm: { firstName: '', lastName: '' }, isUpdatingInfo: true }, user: { data } },
        { profile: profileReducer, user: userReducer }
    ),
];

export const UpdatingWithData = Template.bind({});
UpdatingWithData.decorators = [
    StoreDecorator(
        { profile: { data, updateInfoForm: { firstName, lastName }, isUpdatingInfo: true }, user: { data } },
        { profile: profileReducer, user: userReducer }
    ),
];

export const PossibleFriendVariantOffline = Template.bind({});
PossibleFriendVariantOffline.decorators = [
    StoreDecorator(
        { profile: { data: { ...data, lastSeen: lastSeen(false), friendStatus: 'possibleFriend' } }, user: { data } },
        { profile: profileReducer, user: userReducer }
    ),
];

export const PossibleFriendVariantOnline = Template.bind({});
PossibleFriendVariantOnline.decorators = [
    StoreDecorator(
        { profile: { data: { ...data, friendStatus: 'possibleFriend' } }, user: { data } },
        { profile: profileReducer, user: userReducer }
    ),
];

export const OutcomingFriendRequestVariantOffline = Template.bind({});
OutcomingFriendRequestVariantOffline.decorators = [
    StoreDecorator(
        { profile: { data: { ...data, lastSeen: lastSeen(false), friendStatus: 'outcomingRequest' } }, user: { data } },
        { profile: profileReducer, user: userReducer }
    ),
];

export const OutcomingFriendRequestVariantOnline = Template.bind({});
OutcomingFriendRequestVariantOnline.decorators = [
    StoreDecorator(
        { profile: { data: { ...data, friendStatus: 'outcomingRequest' } }, user: { data } },
        { profile: profileReducer, user: userReducer }
    ),
];

export const IncomingFriendRequestVariantOffline = Template.bind({});
IncomingFriendRequestVariantOffline.decorators = [
    StoreDecorator(
        {
            profile: { data: { ...data, lastSeen: lastSeen(false), friendStatus: 'incomingRequest' } },
            user: { data },
        },
        { profile: profileReducer, user: userReducer }
    ),
];

export const IncomingFriendRequestVariantOnline = Template.bind({});
IncomingFriendRequestVariantOnline.decorators = [
    StoreDecorator(
        { profile: { data: { ...data, friendStatus: 'incomingRequest' } }, user: { data } },
        { profile: profileReducer, user: userReducer }
    ),
];

export const AlreadyFriendVariantOffline = Template.bind({});
AlreadyFriendVariantOffline.decorators = [
    StoreDecorator(
        {
            profile: { data: { ...data, lastSeen: lastSeen(false), friendStatus: 'alreadyFriend' } },
            user: { data },
        },
        { profile: profileReducer, user: userReducer }
    ),
];

export const AlreadyFriendVariantOnline = Template.bind({});
AlreadyFriendVariantOnline.decorators = [
    StoreDecorator(
        { profile: { data: { ...data, friendStatus: 'alreadyFriend' } }, user: { data } },
        { profile: profileReducer, user: userReducer }
    ),
];
