import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { getRouteProfile } from 'shared/const/router';

import { AppLink } from './AppLink';

export default {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {},
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Default = Template.bind({});
Default.args = { to: getRouteProfile('#'), children: 'Моя страница' };
