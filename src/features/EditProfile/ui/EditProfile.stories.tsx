import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { EditProfile } from './EditProfile';

export default {
    title: 'features/EditProfile',
    component: EditProfile,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof EditProfile>;

const Template: ComponentStory<typeof EditProfile> = (args) => <EditProfile {...args} />;

export const Default = Template.bind({});
