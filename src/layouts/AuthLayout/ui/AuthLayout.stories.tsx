import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

import { AuthLayout } from './AuthLayout';

export default {
    title: 'layouts/AuthLayout',
    component: AuthLayout,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AuthLayout>;

const Template: ComponentStory<typeof AuthLayout> = (args) => <AuthLayout {...args} />;

export const Default = Template.bind({});
Default.decorators = [StoreDecorator({})];
