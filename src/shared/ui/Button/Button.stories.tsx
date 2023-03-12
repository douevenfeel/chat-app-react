import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const CleanSmallButton = Template.bind({});
CleanSmallButton.args = {
    children: 'Button',
    variant: 'clean',
    size: 'small',
    onClick: () => navigator.clipboard.writeText('<Button variant="clean" size="small">Button</Button>'),
};

export const CleanMediumButton = Template.bind({});
CleanMediumButton.args = {
    children: 'Button',
    variant: 'clean',
    size: 'medium',
    onClick: () => navigator.clipboard.writeText('<Button variant="clean" size="medium">Button</Button>'),
};

export const PrimarySmallButton = Template.bind({});
PrimarySmallButton.args = {
    children: 'Button',
    variant: 'primary',
    size: 'small',
    onClick: () => navigator.clipboard.writeText('<Button variant="primary" size="small">Button</Button>'),
};

export const PrimaryMediumButton = Template.bind({});
PrimaryMediumButton.args = {
    children: 'Button',
    variant: 'primary',
    size: 'medium',
    onClick: () => navigator.clipboard.writeText('<Button variant="primary" size="medium">Button</Button>'),
};

export const PrimarySmallButtonDisabled = Template.bind({});
PrimarySmallButtonDisabled.args = {
    children: 'Button',
    variant: 'primary',
    size: 'small',
    disabled: true,
    onClick: () => navigator.clipboard.writeText('<Button variant="primary" size="small">Button</Button>'),
};

export const PrimaryMediumButtonDisabled = Template.bind({});
PrimaryMediumButtonDisabled.args = {
    children: 'Button',
    variant: 'primary',
    size: 'medium',
    disabled: true,
    onClick: () => navigator.clipboard.writeText('<Button variant="primary" size="medium">Button</Button>'),
};
