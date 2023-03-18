import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

import { ProfileCardSmall } from './ProfileCardSmall';

export default {
    title: 'entities/Profile/ProfileCardSmall',
    component: ProfileCardSmall,
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
} as ComponentMeta<typeof ProfileCardSmall>;

const Template: ComponentStory<typeof ProfileCardSmall> = (args) => <ProfileCardSmall {...args} />;

export const Default = Template.bind({});
