import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { registrationReducer } from 'features/Registration';
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
EmailFormWithData.decorators = [
    StoreDecorator({ registration: { email: 'test@mail.ru' } }, { registration: registrationReducer }),
];

export const EmailFormWithError = Template.bind({});
EmailFormWithError.decorators = [
    StoreDecorator({ registration: { email: 'test@mail.ru', error: 'error' } }, { registration: registrationReducer }),
];

export const CodeFormDefault = Template.bind({});
CodeFormDefault.decorators = [StoreDecorator({ registration: {} }, { registration: registrationReducer })];

export const CodeFormWithData = Template.bind({});
CodeFormWithData.decorators = [
    StoreDecorator(
        { registration: { email: 'test@mail.ru', successEmail: 'test@mail.ru', confirmCode: 'qwerty' } },
        { registration: registrationReducer }
    ),
];

export const CodeFormWithError = Template.bind({});
CodeFormWithError.decorators = [
    StoreDecorator(
        {
            registration: {
                email: 'test@mail.ru',
                successEmail: 'test@mail.ru',
                confirmCode: 'qwerty',
                error: 'error',
            },
        },
        { registration: registrationReducer }
    ),
];

export const ProfileFormDefault = Template.bind({});
ProfileFormDefault.decorators = [
    StoreDecorator(
        { registration: { email: 'test@mail.ru', successEmail: 'test@mail.ru', isConfirmed: true } },
        { registration: registrationReducer }
    ),
];

export const ProfileFormWithData = Template.bind({});
ProfileFormWithData.decorators = [
    StoreDecorator(
        {
            registration: {
                email: 'test@mail.ru',
                successEmail: 'test@mail.ru',
                isConfirmed: true,
                firstName: 'firstName',
                lastName: 'lastName',
                password: 'qwerty',
            },
        },
        { registration: registrationReducer }
    ),
];

export const ProfileFormWithError = Template.bind({});
ProfileFormWithError.decorators = [
    StoreDecorator(
        {
            registration: {
                email: 'test@mail.ru',
                successEmail: 'test@mail.ru',
                isConfirmed: true,
                firstName: 'firstName',
                lastName: 'lastName',
                password: 'qwerty',
                error: 'error',
            },
        },
        { registration: registrationReducer }
    ),
];
