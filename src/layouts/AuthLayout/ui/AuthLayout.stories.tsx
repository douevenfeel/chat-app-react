import type { ComponentStory, ComponentMeta } from '@storybook/react';

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
