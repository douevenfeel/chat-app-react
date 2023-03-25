import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { AddFriend } from './AddFriend';

export default {
    title: 'features/AddFriend',
    component: AddFriend,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AddFriend>;

const Template: ComponentStory<typeof AddFriend> = (args) => <AddFriend {...args} />;

export const Default = Template.bind({});
Default.args = {
    id: 1,
};
