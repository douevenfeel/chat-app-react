import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { profileReducer } from 'entities/Profile';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

import { ProfileUpdateInfoForm } from './ProfileUpdateInfoForm';

export default {
    title: 'features/ProfileUpdateInfoForm',
    component: ProfileUpdateInfoForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileUpdateInfoForm>;

const Template: ComponentStory<typeof ProfileUpdateInfoForm> = (args) => <ProfileUpdateInfoForm {...args} />;

export const Empty = Template.bind({});
Empty.decorators = [
    StoreDecorator({ profile: { updateInfoForm: { firstName: '', lastName: '' } } }, { profile: profileReducer }),
];

export const WithData = Template.bind({});
WithData.decorators = [
    StoreDecorator(
        { profile: { updateInfoForm: { firstName: 'firstName', lastName: 'lastName' } } },
        { profile: profileReducer }
    ),
];
