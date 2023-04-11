import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { getRouteProfile } from 'shared/const/router';

import { Typography } from '../Typography/Typography';

import { AppLink } from './AppLink';

export default {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: getRouteProfile('#'),
    },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const PrimaryExtraSmall = Template.bind({});
PrimaryExtraSmall.args = {
    children: (
        <Typography
            size='extraSmall'
            tag='p'
            variant='primary'
            weight='normal'
        >
            Моя страница
        </Typography>
    ),
};

export const PrimarySmall = Template.bind({});
PrimarySmall.args = {
    children: (
        <Typography
            size='small'
            tag='p'
            variant='primary'
            weight='normal'
        >
            Моя страница
        </Typography>
    ),
};

export const PrimaryMedium = Template.bind({});
PrimaryMedium.args = {
    children: (
        <Typography
            size='medium'
            tag='p'
            variant='primary'
            weight='medium'
        >
            Моя страница
        </Typography>
    ),
};

export const PrimaryLarge = Template.bind({});
PrimaryLarge.args = {
    children: (
        <Typography
            size='large'
            tag='p'
            variant='primary'
            weight='semi'
        >
            Моя страница
        </Typography>
    ),
};

export const PrimaryExtraLarge = Template.bind({});
PrimaryExtraLarge.args = {
    children: (
        <Typography
            size='extraLarge'
            tag='p'
            variant='primary'
            weight='semi'
        >
            Моя страница
        </Typography>
    ),
};

export const SecondaryExtraSmall = Template.bind({});
SecondaryExtraSmall.args = {
    children: (
        <Typography
            size='extraSmall'
            tag='p'
            variant='secondary'
            weight='normal'
        >
            Моя страница
        </Typography>
    ),
};

export const SecondarySmall = Template.bind({});
SecondarySmall.args = {
    children: (
        <Typography
            size='small'
            tag='p'
            variant='secondary'
            weight='normal'
        >
            Моя страница
        </Typography>
    ),
};

export const SecondaryMedium = Template.bind({});
SecondaryMedium.args = {
    children: (
        <Typography
            size='medium'
            tag='p'
            variant='secondary'
            weight='medium'
        >
            Моя страница
        </Typography>
    ),
};

export const SecondaryLarge = Template.bind({});
SecondaryLarge.args = {
    children: (
        <Typography
            size='large'
            tag='p'
            variant='secondary'
            weight='semi'
        >
            Моя страница
        </Typography>
    ),
};

export const SecondaryExtraLarge = Template.bind({});
SecondaryExtraLarge.args = {
    children: (
        <Typography
            size='extraLarge'
            tag='p'
            variant='secondary'
            weight='semi'
        >
            Моя страница
        </Typography>
    ),
};
