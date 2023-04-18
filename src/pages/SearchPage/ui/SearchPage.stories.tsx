import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { userReducer } from 'entities/User';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import type { User } from 'shared/types/User';

import SearchPage from './SearchPage';

export default {
    title: 'pages/SearchPage',
    component: SearchPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof SearchPage>;

const Template: ComponentStory<typeof SearchPage> = () => <SearchPage />;

const data: User = {
    id: 1,
    avatar: 'indigo',
    email: 'test@mail.ru',
    firstName: 'firstName',
    lastName: 'lastName',
    lastSeen: String(Date.now()),
};

export const Default = Template.bind({});
Default.decorators = [StoreDecorator({ user: { data } }, { user: userReducer })];
