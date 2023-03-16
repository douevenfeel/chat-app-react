import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

import { DeleteFriend } from './DeleteFriend';

export default {
    title: 'features/DeleteFriend',
    component: DeleteFriend,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof DeleteFriend>;

const Template: ComponentStory<typeof DeleteFriend> = (args) => <DeleteFriend {...args} />;

export const Default = Template.bind({});
Default.args = {
    id: 1,
};
Default.decorators = [StoreDecorator({})];
