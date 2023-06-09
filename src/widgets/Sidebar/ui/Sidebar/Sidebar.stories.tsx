import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { user as data } from 'shared/config/storybook/const/data';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

import { Sidebar } from './Sidebar';

export default {
    title: 'widgets/Sidebar/Sidebar',
    component: Sidebar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = () => <Sidebar />;

export const Default = Template.bind({});
Default.decorators = [StoreDecorator({ user: { data } })];
