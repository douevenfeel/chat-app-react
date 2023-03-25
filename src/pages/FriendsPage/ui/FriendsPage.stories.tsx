import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { friendsReducer } from 'entities/Friends';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

import FriendsPage from './FriendsPage';

export default {
    title: 'pages/FriendsPage',
    component: FriendsPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof FriendsPage>;

const Template: ComponentStory<typeof FriendsPage> = () => <FriendsPage />;

export const Default = Template.bind({});
Default.decorators = [
    StoreDecorator(
        {
            friends: {
                data: [
                    { id: 1, firstName: 'firstName', lastName: 'lastName', avatar: 'indigo' },
                    { id: 2, firstName: 'firstName', lastName: 'lastName', avatar: 'purple' },
                    { id: 3, firstName: 'firstName', lastName: 'lastName', avatar: 'blue' },
                    { id: 4, firstName: 'firstName', lastName: 'lastName', avatar: 'red' },
                    { id: 5, firstName: 'firstName', lastName: 'lastName', avatar: 'green' },
                ],
            },
        },
        { friends: friendsReducer }
    ),
];
