import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { registrationReducer } from 'features/Registration';
import {
    email,
    error,
    password,
    firstName,
    lastName,
    confirmCode,
    successEmail,
} from 'shared/config/storybook/const/data';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

import RegistrationPage from './RegistrationPage';

export default {
    title: 'pages/RegistrationPage',
    component: RegistrationPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof RegistrationPage>;

const Template: ComponentStory<typeof RegistrationPage> = () => <RegistrationPage />;

export const EmailFormDefault = Template.bind({});
EmailFormDefault.decorators = [StoreDecorator({ registration: { email: '' } }, { registration: registrationReducer })];

export const EmailFormWithData = Template.bind({});
EmailFormWithData.decorators = [StoreDecorator({ registration: { email } }, { registration: registrationReducer })];

export const EmailFormWithError = Template.bind({});
EmailFormWithError.decorators = [
    StoreDecorator({ registration: { email, error } }, { registration: registrationReducer }),
];

export const CodeFormDefault = Template.bind({});
CodeFormDefault.decorators = [StoreDecorator({ registration: {} }, { registration: registrationReducer })];

export const CodeFormWithData = Template.bind({});
CodeFormWithData.decorators = [
    StoreDecorator({ registration: { email, successEmail, confirmCode } }, { registration: registrationReducer }),
];

export const CodeFormWithError = Template.bind({});
CodeFormWithError.decorators = [
    StoreDecorator(
        { registration: { email, successEmail, confirmCode, error } },
        { registration: registrationReducer }
    ),
];

export const ProfileFormDefault = Template.bind({});
ProfileFormDefault.decorators = [
    StoreDecorator({ registration: { email, successEmail, isConfirmed: true } }, { registration: registrationReducer }),
];

export const ProfileFormWithData = Template.bind({});
ProfileFormWithData.decorators = [
    StoreDecorator(
        { registration: { email, successEmail, isConfirmed: true, firstName, lastName, password } },
        { registration: registrationReducer }
    ),
];

export const ProfileFormWithError = Template.bind({});
ProfileFormWithError.decorators = [
    StoreDecorator(
        { registration: { email, successEmail, isConfirmed: true, firstName, lastName, password, error } },
        { registration: registrationReducer }
    ),
];
