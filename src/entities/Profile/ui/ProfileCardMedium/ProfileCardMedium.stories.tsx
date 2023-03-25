import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { SendMessage } from 'features/SendMessage';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

import { ProfileCardMedium } from './ProfileCardMedium';

export default {
    title: 'entities/Profile/ProfileCardMedium',
    component: ProfileCardMedium,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        data: {
            id: 1,
            avatar: 'indigo',
            email: 'test@mail.ru',
            firstName: 'firstName',
            lastName: 'lastName',
        },
    },
    decorators: [StoreDecorator({})],
} as ComponentMeta<typeof ProfileCardMedium>;

const Template: ComponentStory<typeof ProfileCardMedium> = (args) => <ProfileCardMedium {...args} />;

export const Default = Template.bind({});
Default.args = {
    options: (
        <SendMessage
            id={1}
            key='sendMessage'
        />
    ),
};
