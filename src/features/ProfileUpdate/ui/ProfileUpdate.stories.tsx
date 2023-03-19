import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

import { ProfileUpdate } from './ProfileUpdate';

export default {
    title: 'features/ProfileUpdate',
    component: ProfileUpdate,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileUpdate>;

const Template: ComponentStory<typeof ProfileUpdate> = (args) => <ProfileUpdate {...args} />;

export const Default = Template.bind({});
Default.decorators = [StoreDecorator({})];
