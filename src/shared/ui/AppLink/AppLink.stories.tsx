import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { getRouteProfile } from 'shared/const/router';

import { Text } from '../Text/Text';

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

export const PrimarySmall = Template.bind({});
PrimarySmall.args = {
    children: (
        <Text
            size='small'
            tag='p'
            variant='primary'
        >
            Моя страница
        </Text>
    ),
};

export const PrimaryMedium = Template.bind({});
PrimaryMedium.args = {
    children: (
        <Text
            size='medium'
            tag='p'
            variant='primary'
        >
            Моя страница
        </Text>
    ),
};

export const PrimaryLarge = Template.bind({});
PrimaryLarge.args = {
    children: (
        <Text
            size='large'
            tag='p'
            variant='primary'
        >
            Моя страница
        </Text>
    ),
};

export const SecondarySmall = Template.bind({});
SecondarySmall.args = {
    children: (
        <Text
            size='small'
            tag='p'
            variant='secondary'
        >
            Моя страница
        </Text>
    ),
};

export const SecondaryMedium = Template.bind({});
SecondaryMedium.args = {
    children: (
        <Text
            size='medium'
            tag='p'
            variant='secondary'
        >
            Моя страница
        </Text>
    ),
};

export const SecondaryLarge = Template.bind({});
SecondaryLarge.args = {
    children: (
        <Text
            size='large'
            tag='p'
            variant='secondary'
        >
            Моя страница
        </Text>
    ),
};
