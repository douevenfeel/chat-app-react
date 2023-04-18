import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { NavigateToProfile } from './NavigateToProfile';

export default {
    title: 'features/NavigateToProfile',
    component: NavigateToProfile,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof NavigateToProfile>;

const Template: ComponentStory<typeof NavigateToProfile> = (args) => <NavigateToProfile {...args} />;

export const Offline = Template.bind({});
Offline.args = {
    id: 1,
    email: 'test@mail.ru',
    firstName: 'firstName',
    lastName: 'lastName',
    avatar: 'purple',
    lastSeen: String(Date.now() - 300000),
};

export const Online = Template.bind({});
Online.args = {
    id: 1,
    email: 'test@mail.ru',
    firstName: 'firstName',
    lastName: 'lastName',
    avatar: 'purple',
    lastSeen: String(Date.now()),
};
