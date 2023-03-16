import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

import { CancelFriendRequest } from './CancelFriendRequest';

export default {
    title: 'features/CancelFriendRequest',
    component: CancelFriendRequest,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CancelFriendRequest>;

const Template: ComponentStory<typeof CancelFriendRequest> = (args) => <CancelFriendRequest {...args} />;

export const Default = Template.bind({});
Default.args = {
    id: 1,
};
Default.decorators = [StoreDecorator({})];
