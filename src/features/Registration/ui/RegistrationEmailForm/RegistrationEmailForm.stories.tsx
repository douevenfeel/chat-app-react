import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { registrationReducer } from 'features/Registration/model/slice/registrationSlice';
import { email, error } from 'shared/config/storybook/const/data';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

import { RegistrationEmailForm } from './RegistrationEmailForm';

export default {
    title: 'features/Registration/RegistrationEmailForm',
    component: RegistrationEmailForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof RegistrationEmailForm>;

const Template: ComponentStory<typeof RegistrationEmailForm> = () => <RegistrationEmailForm />;

export const Default = Template.bind({});
Default.decorators = [StoreDecorator({ registration: { email: '' } }, { registration: registrationReducer })];

export const WithData = Template.bind({});
WithData.decorators = [StoreDecorator({ registration: { email } }, { registration: registrationReducer })];

export const WithError = Template.bind({});
WithError.decorators = [StoreDecorator({ registration: { email, error } }, { registration: registrationReducer })];
