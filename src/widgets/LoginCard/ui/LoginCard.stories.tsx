import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { loginReducer } from 'features/Login/model/slice/loginSlice';
import { email, error, password } from 'shared/config/storybook/const/data';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

import { LoginCard } from './LoginCard';

export default {
    title: 'widgets/LoginCard',
    component: LoginCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginCard>;

const Template: ComponentStory<typeof LoginCard> = () => <LoginCard />;

export const Default = Template.bind({});
Default.decorators = [StoreDecorator({ login: {} }, { login: loginReducer })];

export const WithData = Template.bind({});
WithData.decorators = [StoreDecorator({ login: { email, password } }, { login: loginReducer })];

export const WithError = Template.bind({});
WithError.decorators = [StoreDecorator({ login: { email, error } }, { login: loginReducer })];
