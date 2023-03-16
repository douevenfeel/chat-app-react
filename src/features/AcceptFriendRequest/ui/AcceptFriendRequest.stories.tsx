import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

import { AcceptFriendRequest } from './AcceptFriendRequest';

export default {
    title: 'features/AcceptFriendRequest',
    component: AcceptFriendRequest,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AcceptFriendRequest>;

const Template: ComponentStory<typeof AcceptFriendRequest> = (args) => <AcceptFriendRequest {...args} />;

export const Default = Template.bind({});
Default.args = {
    id: 1,
};
Default.decorators = [StoreDecorator({})];
