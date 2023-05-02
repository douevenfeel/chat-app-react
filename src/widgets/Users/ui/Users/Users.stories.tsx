import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { user } from 'shared/config/storybook/const/data';
import type { User } from 'shared/types/User';

import { Users } from './Users';

export default {
    title: 'widgets/Users/Users',
    component: Users,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Users>;

const Template: ComponentStory<typeof Users> = (args) => <Users {...args} />;

const data: User[] = [{ ...user }, { ...user, id: 2 }, { ...user, id: 3 }, { ...user, id: 4 }, { ...user, id: 5 }];

export const Default = Template.bind({});
Default.args = { data };
