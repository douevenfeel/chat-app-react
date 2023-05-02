import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { lastSeen, user as profile } from 'shared/config/storybook/const/data';

import { UserItem } from './UserItem';

export default {
    title: 'widgets/Users/UserItem',
    component: UserItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof UserItem>;

const Template: ComponentStory<typeof UserItem> = (args) => <UserItem {...args} />;

export const DefaultOffline = Template.bind({});
DefaultOffline.args = { profile: { ...profile, lastSeen: lastSeen(false) } };

export const DefaultOnline = Template.bind({});
DefaultOnline.args = { profile };
