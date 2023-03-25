import type { ComponentStory, ComponentMeta } from '@storybook/react';

import ConversationPage from './ConversationPage';

export default {
    title: 'pages/ConversationPage',
    component: ConversationPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ConversationPage>;

const Template: ComponentStory<typeof ConversationPage> = () => <ConversationPage />;

export const Default = Template.bind({});
