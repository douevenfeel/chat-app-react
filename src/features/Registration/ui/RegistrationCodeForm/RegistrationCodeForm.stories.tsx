import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { registrationReducer } from 'features/Registration/model/slice/registrationSlice';
import { confirmCode, email, error } from 'shared/config/storybook/const/data';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

import { RegistrationCodeForm } from './RegistrationCodeForm';

export default {
    title: 'features/Registration/RegistrationCodeForm',
    component: RegistrationCodeForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof RegistrationCodeForm>;

const Template: ComponentStory<typeof RegistrationCodeForm> = () => <RegistrationCodeForm />;

export const Default = Template.bind({});
Default.decorators = [StoreDecorator({ registration: {} }, { registration: registrationReducer })];

export const WithData = Template.bind({});
WithData.decorators = [StoreDecorator({ registration: { email, confirmCode } }, { registration: registrationReducer })];

export const WithError = Template.bind({});
WithError.decorators = [
    StoreDecorator({ registration: { email, confirmCode, error } }, { registration: registrationReducer }),
];
