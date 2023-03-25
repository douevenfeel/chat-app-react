import type { ComponentStory, ComponentMeta } from '@storybook/react';

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
