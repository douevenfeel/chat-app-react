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

const value = 'Input';
const placeholder = 'Input...';

export const ClearSmallWithValue = Template.bind({});
ClearSmallWithValue.args = { variant: 'clear', size: 'small', value };

export const ClearSmallWithPlaceholder = Template.bind({});
ClearSmallWithPlaceholder.args = { variant: 'clear', size: 'small', placeholder };

export const PrimarySmallWithValue = Template.bind({});
PrimarySmallWithValue.args = { variant: 'primary', size: 'small', value };

export const PrimarySmallWithPlaceholder = Template.bind({});
PrimarySmallWithPlaceholder.args = { variant: 'primary', size: 'small', placeholder };

export const SecondarySmallWithValue = Template.bind({});
SecondarySmallWithValue.args = { variant: 'secondary', size: 'small', value };

export const SecondarySmallWithPlaceholder = Template.bind({});
SecondarySmallWithPlaceholder.args = { variant: 'secondary', size: 'small', placeholder };

export const OutlineSmallWithValue = Template.bind({});
OutlineSmallWithValue.args = { variant: 'outline', size: 'small', value };

export const OutlineSmallWithPlaceholder = Template.bind({});
OutlineSmallWithPlaceholder.args = { variant: 'outline', size: 'small', placeholder };

export const ClearMediumWithValue = Template.bind({});
ClearMediumWithValue.args = { variant: 'clear', size: 'medium', value };

export const ClearMediumWithPlaceholder = Template.bind({});
ClearMediumWithPlaceholder.args = { variant: 'clear', size: 'medium', placeholder };

export const PrimaryMediumWithValue = Template.bind({});
PrimaryMediumWithValue.args = { variant: 'primary', size: 'medium', value };

export const PrimaryMediumWithPlaceholder = Template.bind({});
PrimaryMediumWithPlaceholder.args = { variant: 'primary', size: 'medium', placeholder };

export const SecondaryMediumWithValue = Template.bind({});
SecondaryMediumWithValue.args = { variant: 'secondary', size: 'medium', value };

export const SecondaryMediumWithPlaceholder = Template.bind({});
SecondaryMediumWithPlaceholder.args = { variant: 'secondary', size: 'medium', placeholder };

export const OutlineMediumWithValue = Template.bind({});
OutlineMediumWithValue.args = { variant: 'outline', size: 'medium', value };

export const OutlineMediumWithPlaceholder = Template.bind({});
OutlineMediumWithPlaceholder.args = { variant: 'outline', size: 'medium', placeholder };
