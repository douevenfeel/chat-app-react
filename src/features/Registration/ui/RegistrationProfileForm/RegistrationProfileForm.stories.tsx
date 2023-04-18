import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { registrationReducer } from 'features/Registration/model/slice/registrationSlice';
import { email, firstName, lastName, password, error } from 'shared/config/storybook/const/data';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

import { RegistrationProfileForm } from './RegistrationProfileForm';

export default {
    title: 'features/Registration/RegistrationProfileForm',
    component: RegistrationProfileForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof RegistrationProfileForm>;

const Template: ComponentStory<typeof RegistrationProfileForm> = () => <RegistrationProfileForm />;

export const Default = Template.bind({});
Default.decorators = [StoreDecorator({ registration: {} }, { registration: registrationReducer })];

export const WithData = Template.bind({});
WithData.decorators = [
    StoreDecorator({ registration: { email, firstName, lastName, password } }, { registration: registrationReducer }),
];

export const WithError = Template.bind({});
WithError.decorators = [
    StoreDecorator(
        { registration: { email, firstName, lastName, password, error } },
        { registration: registrationReducer }
    ),
];
