import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { RegistrationInfo } from './RegistrationInfo';

export default {
    title: 'features/Registration/RegistrationInfo',
    component: RegistrationInfo,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof RegistrationInfo>;

const Template: ComponentStory<typeof RegistrationInfo> = () => <RegistrationInfo />;

export const Default = Template.bind({});
