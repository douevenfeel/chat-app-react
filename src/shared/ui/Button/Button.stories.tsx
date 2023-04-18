import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: { children: 'Button' },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const CleanSmallButton = Template.bind({});
CleanSmallButton.args = {
    variant: 'clean',
    size: 'small',
};

export const CleanMediumButton = Template.bind({});
CleanMediumButton.args = {
    variant: 'clean',
    size: 'medium',
};

export const PrimarySmallButton = Template.bind({});
PrimarySmallButton.args = {
    variant: 'primary',
    size: 'small',
};

export const PrimaryMediumButton = Template.bind({});
PrimaryMediumButton.args = {
    variant: 'primary',
    size: 'medium',
};

export const PrimarySmallButtonDisabled = Template.bind({});
PrimarySmallButtonDisabled.args = {
    variant: 'primary',
    size: 'small',
    disabled: true,
};

export const PrimaryMediumButtonDisabled = Template.bind({});
PrimaryMediumButtonDisabled.args = {
    variant: 'primary',
    size: 'medium',
    disabled: true,
};
