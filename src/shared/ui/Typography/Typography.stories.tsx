import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Typography } from './Typography';

export default {
    title: 'shared/Typography',
    component: Typography,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        children: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, vel.',
        tag: 'p',
        align: 'left',
    },
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => <Typography {...args} />;

export const PrimaryExtraSmallSizeNormalWeight = Template.bind({});
PrimaryExtraSmallSizeNormalWeight.args = {
    variant: 'primary',
    size: 'extraSmall',
    weight: 'normal',
};

export const PrimaryExtraSmallSizeMediumWeight = Template.bind({});
PrimaryExtraSmallSizeMediumWeight.args = {
    variant: 'primary',
    size: 'extraSmall',
    weight: 'medium',
};

export const PrimaryExtraSmallSizeSemiWeight = Template.bind({});
PrimaryExtraSmallSizeSemiWeight.args = {
    variant: 'primary',
    size: 'extraSmall',
    weight: 'semi',
};

export const PrimaryExtraSmallSizeBoldWeight = Template.bind({});
PrimaryExtraSmallSizeBoldWeight.args = {
    variant: 'primary',
    size: 'extraSmall',
    weight: 'bold',
};

export const PrimarySmallSizeNormalWeight = Template.bind({});
PrimarySmallSizeNormalWeight.args = {
    variant: 'primary',
    size: 'small',
    weight: 'normal',
};

export const PrimarySmallSizeMediumWeight = Template.bind({});
PrimarySmallSizeMediumWeight.args = {
    variant: 'primary',
    size: 'small',
    weight: 'medium',
};

export const PrimarySmallSizeSemiWeight = Template.bind({});
PrimarySmallSizeSemiWeight.args = {
    variant: 'primary',
    size: 'small',
    weight: 'semi',
};

export const PrimarySmallSizeBoldWeight = Template.bind({});
PrimarySmallSizeBoldWeight.args = {
    variant: 'primary',
    size: 'small',
    weight: 'bold',
};

export const PrimaryMediumSizeNormalWeight = Template.bind({});
PrimaryMediumSizeNormalWeight.args = {
    variant: 'primary',
    size: 'medium',
    weight: 'normal',
};

export const PrimaryMediumSizeMediumWeight = Template.bind({});
PrimaryMediumSizeMediumWeight.args = {
    variant: 'primary',
    size: 'medium',
    weight: 'medium',
};

export const PrimaryMediumSizeSemiWeight = Template.bind({});
PrimaryMediumSizeSemiWeight.args = {
    variant: 'primary',
    size: 'medium',
    weight: 'semi',
};

export const PrimaryMediumSizeBoldWeight = Template.bind({});
PrimaryMediumSizeBoldWeight.args = {
    variant: 'primary',
    size: 'medium',
    weight: 'bold',
};

export const PrimaryLargeSizeNormalWeight = Template.bind({});
PrimaryLargeSizeNormalWeight.args = {
    variant: 'primary',
    size: 'large',
    weight: 'normal',
};

export const PrimaryLargeSizeMediumWeight = Template.bind({});
PrimaryLargeSizeMediumWeight.args = {
    variant: 'primary',
    size: 'large',
    weight: 'medium',
};

export const PrimaryLargeSizeSemiWeight = Template.bind({});
PrimaryLargeSizeSemiWeight.args = {
    variant: 'primary',
    size: 'large',
    weight: 'semi',
};

export const PrimaryLargeSizeBoldWeight = Template.bind({});
PrimaryLargeSizeBoldWeight.args = {
    variant: 'primary',
    size: 'large',
    weight: 'bold',
};

export const PrimaryExtraLargeSizeNormalWeight = Template.bind({});
PrimaryExtraLargeSizeNormalWeight.args = {
    variant: 'primary',
    size: 'extraLarge',
    weight: 'normal',
};

export const PrimaryExtraLargeSizeMediumWeight = Template.bind({});
PrimaryExtraLargeSizeMediumWeight.args = {
    variant: 'primary',
    size: 'extraLarge',
    weight: 'medium',
};

export const PrimaryExtraLargeSizeSemiWeight = Template.bind({});
PrimaryExtraLargeSizeSemiWeight.args = {
    variant: 'primary',
    size: 'extraLarge',
    weight: 'semi',
};

export const PrimaryExtraLargeSizeBoldWeight = Template.bind({});
PrimaryExtraLargeSizeBoldWeight.args = {
    variant: 'primary',
    size: 'extraLarge',
    weight: 'bold',
};

export const SecondaryExtraSmallSizeNormalWeight = Template.bind({});
SecondaryExtraSmallSizeNormalWeight.args = {
    variant: 'secondary',
    size: 'extraSmall',
    weight: 'normal',
};

export const SecondaryExtraSmallSizeMediumWeight = Template.bind({});
SecondaryExtraSmallSizeMediumWeight.args = {
    variant: 'secondary',
    size: 'extraSmall',
    weight: 'medium',
};

export const SecondaryExtraSmallSizeSemiWeight = Template.bind({});
SecondaryExtraSmallSizeSemiWeight.args = {
    variant: 'secondary',
    size: 'extraSmall',
    weight: 'semi',
};

export const SecondaryExtraSmallSizeBoldWeight = Template.bind({});
SecondaryExtraSmallSizeBoldWeight.args = {
    variant: 'secondary',
    size: 'extraSmall',
    weight: 'bold',
};

export const SecondarySmallSizeNormalWeight = Template.bind({});
SecondarySmallSizeNormalWeight.args = {
    variant: 'secondary',
    size: 'small',
    weight: 'normal',
};

export const SecondarySmallSizeMediumWeight = Template.bind({});
SecondarySmallSizeMediumWeight.args = {
    variant: 'secondary',
    size: 'small',
    weight: 'medium',
};

export const SecondarySmallSizeSemiWeight = Template.bind({});
SecondarySmallSizeSemiWeight.args = {
    variant: 'secondary',
    size: 'small',
    weight: 'semi',
};

export const SecondarySmallSizeBoldWeight = Template.bind({});
SecondarySmallSizeBoldWeight.args = {
    variant: 'secondary',
    size: 'small',
    weight: 'bold',
};

export const SecondaryMediumSizeNormalWeight = Template.bind({});
SecondaryMediumSizeNormalWeight.args = {
    variant: 'secondary',
    size: 'medium',
    weight: 'normal',
};

export const SecondaryMediumSizeMediumWeight = Template.bind({});
SecondaryMediumSizeMediumWeight.args = {
    variant: 'secondary',
    size: 'medium',
    weight: 'medium',
};

export const SecondaryMediumSizeSemiWeight = Template.bind({});
SecondaryMediumSizeSemiWeight.args = {
    variant: 'secondary',
    size: 'medium',
    weight: 'semi',
};

export const SecondaryMediumSizeBoldWeight = Template.bind({});
SecondaryMediumSizeBoldWeight.args = {
    variant: 'secondary',
    size: 'medium',
    weight: 'bold',
};

export const SecondaryLargeSizeNormalWeight = Template.bind({});
SecondaryLargeSizeNormalWeight.args = {
    variant: 'secondary',
    size: 'large',
    weight: 'normal',
};

export const SecondaryLargeSizeMediumWeight = Template.bind({});
SecondaryLargeSizeMediumWeight.args = {
    variant: 'secondary',
    size: 'large',
    weight: 'medium',
};

export const SecondaryLargeSizeSemiWeight = Template.bind({});
SecondaryLargeSizeSemiWeight.args = {
    variant: 'secondary',
    size: 'large',
    weight: 'semi',
};

export const SecondaryLargeSizeBoldWeight = Template.bind({});
SecondaryLargeSizeBoldWeight.args = {
    variant: 'secondary',
    size: 'large',
    weight: 'bold',
};

export const SecondaryExtraLargeSizeNormalWeight = Template.bind({});
SecondaryExtraLargeSizeNormalWeight.args = {
    variant: 'secondary',
    size: 'extraLarge',
    weight: 'normal',
};

export const SecondaryExtraLargeSizeMediumWeight = Template.bind({});
SecondaryExtraLargeSizeMediumWeight.args = {
    variant: 'secondary',
    size: 'extraLarge',
    weight: 'medium',
};

export const SecondaryExtraLargeSizeSemiWeight = Template.bind({});
SecondaryExtraLargeSizeSemiWeight.args = {
    variant: 'secondary',
    size: 'extraLarge',
    weight: 'semi',
};

export const SecondaryExtraLargeSizeBoldWeight = Template.bind({});
SecondaryExtraLargeSizeBoldWeight.args = {
    variant: 'secondary',
    size: 'extraLarge',
    weight: 'bold',
};

export const ErrorExtraSmallSizeNormalWeight = Template.bind({});
ErrorExtraSmallSizeNormalWeight.args = {
    variant: 'error',
    size: 'extraSmall',
    weight: 'normal',
};

export const ErrorExtraSmallSizeMediumWeight = Template.bind({});
ErrorExtraSmallSizeMediumWeight.args = {
    variant: 'error',
    size: 'extraSmall',
    weight: 'medium',
};

export const ErrorExtraSmallSizeSemiWeight = Template.bind({});
ErrorExtraSmallSizeSemiWeight.args = {
    variant: 'error',
    size: 'extraSmall',
    weight: 'semi',
};

export const ErrorExtraSmallSizeBoldWeight = Template.bind({});
ErrorExtraSmallSizeBoldWeight.args = {
    variant: 'error',
    size: 'extraSmall',
    weight: 'bold',
};

export const ErrorSmallSizeNormalWeight = Template.bind({});
ErrorSmallSizeNormalWeight.args = {
    variant: 'error',
    size: 'small',
    weight: 'normal',
};

export const ErrorSmallSizeMediumWeight = Template.bind({});
ErrorSmallSizeMediumWeight.args = {
    variant: 'error',
    size: 'small',
    weight: 'medium',
};

export const ErrorSmallSizeSemiWeight = Template.bind({});
ErrorSmallSizeSemiWeight.args = {
    variant: 'error',
    size: 'small',
    weight: 'semi',
};

export const ErrorSmallSizeBoldWeight = Template.bind({});
ErrorSmallSizeBoldWeight.args = {
    variant: 'error',
    size: 'small',
    weight: 'bold',
};

export const ErrorMediumSizeNormalWeight = Template.bind({});
ErrorMediumSizeNormalWeight.args = {
    variant: 'error',
    size: 'medium',
    weight: 'normal',
};

export const ErrorMediumSizeMediumWeight = Template.bind({});
ErrorMediumSizeMediumWeight.args = {
    variant: 'error',
    size: 'medium',
    weight: 'medium',
};

export const ErrorMediumSizeSemiWeight = Template.bind({});
ErrorMediumSizeSemiWeight.args = {
    variant: 'error',
    size: 'medium',
    weight: 'semi',
};

export const ErrorMediumSizeBoldWeight = Template.bind({});
ErrorMediumSizeBoldWeight.args = {
    variant: 'error',
    size: 'medium',
    weight: 'bold',
};

export const ErrorLargeSizeNormalWeight = Template.bind({});
ErrorLargeSizeNormalWeight.args = {
    variant: 'error',
    size: 'large',
    weight: 'normal',
};

export const ErrorLargeSizeMediumWeight = Template.bind({});
ErrorLargeSizeMediumWeight.args = {
    variant: 'error',
    size: 'large',
    weight: 'medium',
};

export const ErrorLargeSizeSemiWeight = Template.bind({});
ErrorLargeSizeSemiWeight.args = {
    variant: 'error',
    size: 'large',
    weight: 'semi',
};

export const ErrorLargeSizeBoldWeight = Template.bind({});
ErrorLargeSizeBoldWeight.args = {
    variant: 'error',
    size: 'large',
    weight: 'bold',
};

export const ErrorExtraLargeSizeNormalWeight = Template.bind({});
ErrorExtraLargeSizeNormalWeight.args = {
    variant: 'error',
    size: 'extraLarge',
    weight: 'normal',
};

export const ErrorExtraLargeSizeMediumWeight = Template.bind({});
ErrorExtraLargeSizeMediumWeight.args = {
    variant: 'error',
    size: 'extraLarge',
    weight: 'medium',
};

export const ErrorExtraLargeSizeSemiWeight = Template.bind({});
ErrorExtraLargeSizeSemiWeight.args = {
    variant: 'error',
    size: 'extraLarge',
    weight: 'semi',
};

export const ErrorExtraLargeSizeBoldWeight = Template.bind({});
ErrorExtraLargeSizeBoldWeight.args = {
    variant: 'error',
    size: 'extraLarge',
    weight: 'bold',
};
