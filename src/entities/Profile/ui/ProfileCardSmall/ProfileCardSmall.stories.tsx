import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { user as data, lastSeen } from 'shared/config/storybook/const/data';

import { ProfileCardSmall } from './ProfileCardSmall';

export default {
    title: 'entities/Profile/ProfileCardSmall',
    component: ProfileCardSmall,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCardSmall>;

const Template: ComponentStory<typeof ProfileCardSmall> = (args) => <ProfileCardSmall {...args} />;

export const Offline = Template.bind({});
Offline.args = { data: { ...data, lastSeen: lastSeen(false) } };

export const Online = Template.bind({});
Online.args = { data };
