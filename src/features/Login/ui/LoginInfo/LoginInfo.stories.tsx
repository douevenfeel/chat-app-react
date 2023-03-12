import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { LoginInfo } from './LoginInfo';

export default {
    title: 'features/Login/LoginInfo',
    component: LoginInfo,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginInfo>;

const Template: ComponentStory<typeof LoginInfo> = () => <LoginInfo />;

export const Default = Template.bind({});
