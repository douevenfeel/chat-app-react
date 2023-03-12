import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Input } from './Input';

export default {
    title: 'shared/Input',
    component: Input,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const ClearWithValue = Template.bind({});
ClearWithValue.args = { variant: 'clear', value: 'Input' };

export const ClearWithPlaceholder = Template.bind({});
ClearWithPlaceholder.args = { variant: 'clear', placeholder: 'Input' };

export const PrimaryWithValue = Template.bind({});
PrimaryWithValue.args = { variant: 'primary', value: 'Input' };

export const PrimaryWithPlaceholder = Template.bind({});
PrimaryWithPlaceholder.args = { variant: 'primary', placeholder: 'Input' };

export const SecondaryWithValue = Template.bind({});
SecondaryWithValue.args = { variant: 'secondary', value: 'Input' };

export const SecondaryWithPlaceholder = Template.bind({});
SecondaryWithPlaceholder.args = { variant: 'secondary', placeholder: 'Input' };
