import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { user as data } from 'shared/config/storybook/const/data';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

import NotFoundPage from './NotFoundPage';

export default {
    title: 'pages/NotFoundPage',
    component: NotFoundPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof NotFoundPage>;

const Template: ComponentStory<typeof NotFoundPage> = () => <NotFoundPage />;

export const Authorized = Template.bind({});
Authorized.decorators = [StoreDecorator({ user: { data } })];

export const NotAuthorized = Template.bind({});
