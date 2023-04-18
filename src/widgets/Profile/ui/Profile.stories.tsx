import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { profileReducer } from 'entities/Profile';
import { user as data, firstName, lastName, lastSeen } from 'shared/config/storybook/const/data';
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
UserVariant.decorators = [StoreDecorator({ profile: { data } }, { profile: profileReducer })];

export const UpdatingEmpty = Template.bind({});
UpdatingEmpty.decorators = [
    StoreDecorator(
        { profile: { data, updateInfoForm: { firstName: '', lastName: '' }, isUpdatingInfo: true } },
        { profile: profileReducer }
    ),
];

export const UpdatingWithData = Template.bind({});
UpdatingWithData.decorators = [
    StoreDecorator(
        { profile: { data, updateInfoForm: { firstName, lastName }, isUpdatingInfo: true } },
        { profile: profileReducer }
    ),
];

export const PossibleFriendVariantOffline = Template.bind({});
PossibleFriendVariantOffline.decorators = [
    StoreDecorator(
        { profile: { data: { ...data, lastSeen: lastSeen(false), friendStatus: 'possibleFriend' } } },
        { profile: profileReducer }
    ),
];

export const PossibleFriendVariantOnline = Template.bind({});
PossibleFriendVariantOnline.decorators = [
    StoreDecorator({ profile: { data: { ...data, friendStatus: 'possibleFriend' } } }, { profile: profileReducer }),
];

export const OutcomingFriendRequestVariantOffline = Template.bind({});
OutcomingFriendRequestVariantOffline.decorators = [
    StoreDecorator(
        { profile: { data: { ...data, lastSeen: lastSeen(false), friendStatus: 'outcomingRequest' } } },
        { profile: profileReducer }
    ),
];

export const OutcomingFriendRequestVariantOnline = Template.bind({});
OutcomingFriendRequestVariantOnline.decorators = [
    StoreDecorator({ profile: { data: { ...data, friendStatus: 'outcomingRequest' } } }, { profile: profileReducer }),
];

export const IncomingFriendRequestVariantOffline = Template.bind({});
IncomingFriendRequestVariantOffline.decorators = [
    StoreDecorator(
        { profile: { data: { ...data, lastSeen: lastSeen(false), friendStatus: 'incomingRequest' } } },
        { profile: profileReducer }
    ),
];

export const IncomingFriendRequestVariantOnline = Template.bind({});
IncomingFriendRequestVariantOnline.decorators = [
    StoreDecorator({ profile: { data: { ...data, friendStatus: 'incomingRequest' } } }, { profile: profileReducer }),
];

export const AlreadyFriendVariantOffline = Template.bind({});
AlreadyFriendVariantOffline.decorators = [
    StoreDecorator(
        { profile: { data: { ...data, lastSeen: lastSeen(false), friendStatus: 'alreadyFriend' } } },
        { profile: profileReducer }
    ),
];

export const AlreadyFriendVariantOnline = Template.bind({});
AlreadyFriendVariantOnline.decorators = [
    StoreDecorator({ profile: { data: { ...data, friendStatus: 'alreadyFriend' } } }, { profile: profileReducer }),
];
