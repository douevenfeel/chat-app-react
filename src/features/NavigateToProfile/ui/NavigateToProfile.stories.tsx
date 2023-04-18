import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { user as data, lastSeen } from 'shared/config/storybook/const/data';

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
    ...data,
    lastSeen: lastSeen(false),
};

export const Online = Template.bind({});
Online.args = data;
