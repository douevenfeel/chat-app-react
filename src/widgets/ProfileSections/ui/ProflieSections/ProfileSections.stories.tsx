import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { ProfileSections } from './ProfileSections';

export default {
    title: 'widgets/ProfileSections',
    component: ProfileSections,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileSections>;

const Template: ComponentStory<typeof ProfileSections> = () => <ProfileSections />;

export const Default = Template.bind({});
