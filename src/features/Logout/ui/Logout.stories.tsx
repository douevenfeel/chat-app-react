import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Logout } from './Logout';

export default {
    title: 'features/Logout',
    component: Logout,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Logout>;

const Template: ComponentStory<typeof Logout> = () => <Logout />;

export const Default = Template.bind({});
