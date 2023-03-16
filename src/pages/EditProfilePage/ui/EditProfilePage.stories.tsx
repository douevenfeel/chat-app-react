import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

import EditProfilePage from './EditProfilePage';

export default {
    title: 'pages/EditProfilePage',
    component: EditProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof EditProfilePage>;

const Template: ComponentStory<typeof EditProfilePage> = () => <EditProfilePage />;

export const Default = Template.bind({});
Default.decorators = [StoreDecorator({})];
