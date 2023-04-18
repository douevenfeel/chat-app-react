import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { userReducer } from 'entities/User';
import { user as data } from 'shared/config/storybook/const/data';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

import { Header } from './Header';

export default {
    title: 'widgets/Header',
    component: Header,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = () => <Header />;

export const Authorized = Template.bind({});
Authorized.decorators = [StoreDecorator({ user: { data } }, { user: userReducer })];

export const NotAuthorized = Template.bind({});
