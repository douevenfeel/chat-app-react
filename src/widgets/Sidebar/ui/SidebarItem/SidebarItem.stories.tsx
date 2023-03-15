import type { ComponentStory, ComponentMeta } from '@storybook/react';

import ProfileIcon from 'shared/assets/icons/profile.svg';
import { getRouteProfile } from 'shared/const/router';

import { SidebarItem } from './SidebarItem';

export default {
    title: 'widgets/Sidebar/SidebarItem',
    component: SidebarItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof SidebarItem>;

const Template: ComponentStory<typeof SidebarItem> = (args) => <SidebarItem {...args} />;

export const ProfileItem = Template.bind({});
ProfileItem.args = {
    Icon: ProfileIcon,
    path: getRouteProfile('#'),
    text: 'Моя страница',
};
