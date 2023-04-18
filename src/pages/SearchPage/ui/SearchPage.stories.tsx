import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { userReducer } from 'entities/User';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

import SearchPage from './SearchPage';

export default {
    title: 'pages/SearchPage',
    component: SearchPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof SearchPage>;

const Template: ComponentStory<typeof SearchPage> = () => <SearchPage />;

export const Default = Template.bind({});
Default.decorators = [StoreDecorator({ user: { data: { id: 1 } } }, { user: userReducer })];