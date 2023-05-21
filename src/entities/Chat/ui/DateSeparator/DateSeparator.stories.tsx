import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { DateSeparator } from './DateSeparator';

export default {
    title: 'entities/Chat/DateSeparator',
    component: DateSeparator,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof DateSeparator>;

const Template: ComponentStory<typeof DateSeparator> = (args) => <DateSeparator {...args} />;

export const Default = Template.bind({});
Default.args = {
    createdAt: String(new Date('2023-05-06 13:25:35.623+03')),
};
