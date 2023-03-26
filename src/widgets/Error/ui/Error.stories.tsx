import type { ComponentStory, ComponentMeta } from '@storybook/react';

import Error from './Error';

export default {
    title: 'widgets/Error',
    component: Error,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Error>;

const Template: ComponentStory<typeof Error> = (args) => <Error {...args} />;

export const Default = Template.bind({});
