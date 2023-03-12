import type { ComponentStory, ComponentMeta } from '@storybook/react';

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
