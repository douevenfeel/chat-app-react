import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { loginReducer } from 'features/Login/model/slice/loginSlice';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

import LoginPage from './LoginPage';

export default {
    title: 'pages/LoginPage',
    component: LoginPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginPage>;

const Template: ComponentStory<typeof LoginPage> = () => <LoginPage />;

export const Default = Template.bind({});
Default.decorators = [StoreDecorator({ login: {} }, { login: loginReducer })];

export const WithData = Template.bind({});
WithData.decorators = [
    StoreDecorator({ login: { email: 'test@mail.ru', password: 'qwerty' } }, { login: loginReducer }),
];

export const WithError = Template.bind({});
WithError.decorators = [StoreDecorator({ login: { email: 'test@mail.ru', error: 'error' } }, { login: loginReducer })];
