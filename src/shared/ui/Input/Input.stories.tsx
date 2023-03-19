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

export const ClearSmallWithValue = Template.bind({});
ClearSmallWithValue.args = { variant: 'clear', size: 'small', value: 'Input' };

export const ClearSmallWithPlaceholder = Template.bind({});
ClearSmallWithPlaceholder.args = { variant: 'clear', size: 'small', placeholder: 'Input' };

export const PrimarySmallWithValue = Template.bind({});
PrimarySmallWithValue.args = { variant: 'primary', size: 'small', value: 'Input' };

export const PrimarySmallWithPlaceholder = Template.bind({});
PrimarySmallWithPlaceholder.args = { variant: 'primary', size: 'small', placeholder: 'Input' };

export const SecondarySmallWithValue = Template.bind({});
SecondarySmallWithValue.args = { variant: 'secondary', size: 'small', value: 'Input' };

export const SecondarySmallWithPlaceholder = Template.bind({});
SecondarySmallWithPlaceholder.args = { variant: 'secondary', size: 'small', placeholder: 'Input' };

export const OutlineSmallWithValue = Template.bind({});
OutlineSmallWithValue.args = { variant: 'outline', size: 'small', value: 'Input' };

export const OutlineSmallWithPlaceholder = Template.bind({});
OutlineSmallWithPlaceholder.args = { variant: 'outline', size: 'small', placeholder: 'Input' };

export const ClearMediumWithValue = Template.bind({});
ClearMediumWithValue.args = { variant: 'clear', size: 'medium', value: 'Input' };

export const ClearMediumWithPlaceholder = Template.bind({});
ClearMediumWithPlaceholder.args = { variant: 'clear', size: 'medium', placeholder: 'Input' };

export const PrimaryMediumWithValue = Template.bind({});
PrimaryMediumWithValue.args = { variant: 'primary', size: 'medium', value: 'Input' };

export const PrimaryMediumWithPlaceholder = Template.bind({});
PrimaryMediumWithPlaceholder.args = { variant: 'primary', size: 'medium', placeholder: 'Input' };

export const SecondaryMediumWithValue = Template.bind({});
SecondaryMediumWithValue.args = { variant: 'secondary', size: 'medium', value: 'Input' };

export const SecondaryMediumWithPlaceholder = Template.bind({});
SecondaryMediumWithPlaceholder.args = { variant: 'secondary', size: 'medium', placeholder: 'Input' };

export const OutlineMediumWithValue = Template.bind({});
OutlineMediumWithValue.args = { variant: 'outline', size: 'medium', value: 'Input' };

export const OutlineMediumWithPlaceholder = Template.bind({});
OutlineMediumWithPlaceholder.args = { variant: 'outline', size: 'medium', placeholder: 'Input' };
