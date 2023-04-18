import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { lastSeen, user as profile } from 'shared/config/storybook/const/data';

import { FriendItem } from './FriendItem';

export default {
    title: 'widgets/Friends/FriendItem',
    component: FriendItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof FriendItem>;

const Template: ComponentStory<typeof FriendItem> = (args) => <FriendItem {...args} />;

export const DefaultOffline = Template.bind({});
DefaultOffline.args = {
    profile: { ...profile, lastSeen: lastSeen(false) },
};

export const DefaultOnline = Template.bind({});
DefaultOnline.args = {
    profile,
};
