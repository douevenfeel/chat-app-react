import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Text } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        children: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, vel.',
        tag: 'p',
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const PrimarySmallLeft = Template.bind({});
PrimarySmallLeft.args = {
    variant: 'primary',
    align: 'left',
    size: 'small',
};

export const PrimarySmallCenter = Template.bind({});
PrimarySmallCenter.args = {
    variant: 'primary',
    align: 'center',
    size: 'small',
};

export const PrimarySmallRight = Template.bind({});
PrimarySmallRight.args = {
    variant: 'primary',
    align: 'right',
    size: 'small',
};

export const PrimaryMediumLeft = Template.bind({});
PrimaryMediumLeft.args = {
    variant: 'primary',
    align: 'left',
    size: 'medium',
};

export const PrimaryMediumCenter = Template.bind({});
PrimaryMediumCenter.args = {
    variant: 'primary',
    align: 'center',
    size: 'medium',
};

export const PrimaryMediumRight = Template.bind({});
PrimaryMediumRight.args = {
    variant: 'primary',
    align: 'right',
    size: 'medium',
};

export const PrimaryLargeLeft = Template.bind({});
PrimaryLargeLeft.args = {
    variant: 'primary',
    align: 'left',
    size: 'large',
};

export const PrimaryLargeCenter = Template.bind({});
PrimaryLargeCenter.args = {
    variant: 'primary',
    align: 'center',
    size: 'large',
};

export const PrimaryLargeRight = Template.bind({});
PrimaryLargeRight.args = {
    variant: 'primary',
    align: 'right',
    size: 'large',
};

export const SecondarySmallLeft = Template.bind({});
SecondarySmallLeft.args = {
    variant: 'secondary',
    align: 'left',
    size: 'small',
};

export const SecondarySmallCenter = Template.bind({});
SecondarySmallCenter.args = {
    variant: 'secondary',
    align: 'center',
    size: 'small',
};

export const SecondarySmallRight = Template.bind({});
SecondarySmallRight.args = {
    variant: 'secondary',
    align: 'right',
    size: 'small',
};

export const SecondaryMediumLeft = Template.bind({});
SecondaryMediumLeft.args = {
    variant: 'secondary',
    align: 'left',
    size: 'medium',
};

export const SecondaryMediumCenter = Template.bind({});
SecondaryMediumCenter.args = {
    variant: 'secondary',
    align: 'center',
    size: 'medium',
};

export const SecondaryMediumRight = Template.bind({});
SecondaryMediumRight.args = {
    variant: 'secondary',
    align: 'right',
    size: 'medium',
};
export const SecondaryLargeLeft = Template.bind({});
SecondaryLargeLeft.args = {
    variant: 'secondary',
    align: 'left',
    size: 'large',
};

export const SecondaryLargeCenter = Template.bind({});
SecondaryLargeCenter.args = {
    variant: 'secondary',
    align: 'center',
    size: 'large',
};

export const SecondaryLargeRight = Template.bind({});
SecondaryLargeRight.args = {
    variant: 'secondary',
    align: 'right',
    size: 'large',
};

export const ErrorSmallLeft = Template.bind({});
ErrorSmallLeft.args = {
    variant: 'error',
    align: 'left',
    size: 'small',
};

export const ErrorSmallCenter = Template.bind({});
ErrorSmallCenter.args = {
    variant: 'error',
    align: 'center',
    size: 'small',
};

export const ErrorSmallRight = Template.bind({});
ErrorSmallRight.args = {
    variant: 'error',
    align: 'right',
    size: 'small',
};

export const ErrorMediumLeft = Template.bind({});
ErrorMediumLeft.args = {
    variant: 'error',
    align: 'left',
    size: 'medium',
};

export const ErrorMediumCenter = Template.bind({});
ErrorMediumCenter.args = {
    variant: 'error',
    align: 'center',
    size: 'medium',
};

export const ErrorMediumRight = Template.bind({});
ErrorMediumRight.args = {
    variant: 'error',
    align: 'right',
    size: 'medium',
};

export const ErrorLargeLeft = Template.bind({});
ErrorLargeLeft.args = {
    variant: 'error',
    align: 'left',
    size: 'large',
};

export const ErrorLargeCenter = Template.bind({});
ErrorLargeCenter.args = {
    variant: 'error',
    align: 'center',
    size: 'large',
};

export const ErrorLargeRight = Template.bind({});
ErrorLargeRight.args = {
    variant: 'error',
    align: 'right',
    size: 'large',
};
