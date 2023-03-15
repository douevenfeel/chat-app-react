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
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Default = Template.bind({});
Default.args = {
    to: getRouteProfile('#'),
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
