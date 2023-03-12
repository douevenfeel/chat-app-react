import type { ComponentStory, ComponentMeta } from '@storybook/react';

import RegistrationPage from './RegistrationPage';

export default {
    title: 'pages/RegistrationPage',
    component: RegistrationPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof RegistrationPage>;

const Template: ComponentStory<typeof RegistrationPage> = () => <RegistrationPage />;

export const Default = Template.bind({});
