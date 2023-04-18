import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { userReducer } from 'entities/User';
import { user as data } from 'shared/config/storybook/const/data';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

import ConversationPage from './ConversationPage';

export default {
    title: 'pages/ConversationPage',
    component: ConversationPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ConversationPage>;

const Template: ComponentStory<typeof ConversationPage> = () => <ConversationPage />;

export const Default = Template.bind({});
Default.decorators = [StoreDecorator({ user: { data } }, { user: userReducer })];
