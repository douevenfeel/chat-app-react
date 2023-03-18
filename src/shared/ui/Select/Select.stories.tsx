import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Select } from './Select';

export default {
    title: 'shared/Select',
    component: Select,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
    options: [
        { value: 'firstOption', content: 'first' },
        { value: 'secondOption', content: 'second' },
        { value: 'thirdOption', content: 'third' },
    ],
    onChange: (value) => alert(value),
};
