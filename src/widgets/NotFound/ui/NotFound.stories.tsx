import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

import NotFound from './NotFound';

export default {
    title: 'widgets/NotFound',
    component: NotFound,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof NotFound>;

const Template: ComponentStory<typeof NotFound> = (args) => <NotFound {...args} />;

export const WithNavigateNotAuthorized = Template.bind({});
WithNavigateNotAuthorized.args = {
    withNavigate: true,
};

export const WithNavigateAuthorized = Template.bind({});
WithNavigateAuthorized.args = {
    withNavigate: true,
};
WithNavigateAuthorized.decorators = [
    StoreDecorator({
        user: {
            data: { id: 1, email: 'test@mail.ru', firstName: 'firstName', lastName: 'lastName', avatar: 'indigo' },
        },
    }),
];

export const WithoutNavigate = Template.bind({});
