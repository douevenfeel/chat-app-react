import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

import { loginReducer } from '../../model/slice/loginSlice';

import { LoginForm } from './LoginForm';

export default {
    title: 'features/Login/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = () => <LoginForm />;

export const Default = Template.bind({});
Default.decorators = [StoreDecorator({ login: {} }, { login: loginReducer })];

export const WithData = Template.bind({});
WithData.decorators = [
    StoreDecorator({ login: { email: 'test@mail.ru', password: 'qwerty' } }, { login: loginReducer }),
];

export const WithError = Template.bind({});
WithError.decorators = [StoreDecorator({ login: { email: 'test@mail.ru', error: 'error' } }, { login: loginReducer })];
