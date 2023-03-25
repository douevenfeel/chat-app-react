import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { DefaultLayout } from './DefaultLayout';

export default {
    title: 'layouts/DefaultLayout',
    component: DefaultLayout,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof DefaultLayout>;

const Template: ComponentStory<typeof DefaultLayout> = (args) => <DefaultLayout {...args} />;

export const Default = Template.bind({});
