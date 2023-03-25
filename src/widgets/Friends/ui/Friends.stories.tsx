import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { friendsReducer } from 'entities/Friends';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

import { Friends } from './Friends';

export default {
    title: 'widgets/Friends',
    component: Friends,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Friends>;

const Template: ComponentStory<typeof Friends> = () => <Friends />;

export const WithData = Template.bind({});
WithData.decorators = [
    StoreDecorator(
        {
            friends: {
                data: [
                    {
                        id: 1,
                        avatar: 'indigo',
                        email: 'test@mail.ru',
                        firstName: 'firstName',
                        lastName: 'lastName',
                    },
                    {
                        id: 2,
                        avatar: 'purple',
                        email: 'test@mail.ru',
                        firstName: 'firstName',
                        lastName: 'lastName',
                    },
                    {
                        id: 3,
                        avatar: 'blue',
                        email: 'test@mail.ru',
                        firstName: 'firstName',
                        lastName: 'lastName',
                    },
                    {
                        id: 4,
                        avatar: 'green',
                        email: 'test@mail.ru',
                        firstName: 'firstName',
                        lastName: 'lastName',
                    },
                    {
                        id: 5,
                        avatar: 'red',
                        email: 'test@mail.ru',
                        firstName: 'firstName',
                        lastName: 'lastName',
                    },
                ],
            },
        },
        { friends: friendsReducer }
    ),
];
