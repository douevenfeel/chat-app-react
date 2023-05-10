import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { TextArea } from './TextArea';

export default {
    title: 'shared/TextArea',
    component: TextArea,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args) => <TextArea {...args} />;

export const Placeholder = Template.bind({});
Placeholder.args = {
    value: '',
    placeholder: 'Напишите сообщение',
};

export const Value = Template.bind({});
Value.args = {
    value: '',
    placeholder: 'Напишите сообщение',
};
