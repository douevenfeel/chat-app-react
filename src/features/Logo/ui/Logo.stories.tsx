import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { userReducer } from 'entities/User';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

import { Logo } from './Logo';

export default {
    title: 'features/Logo',
    component: Logo,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = () => <Logo />;

export const Default = Template.bind({});
Default.decorators = [StoreDecorator({ user: { data: { id: 1 } } }, { user: userReducer })];
