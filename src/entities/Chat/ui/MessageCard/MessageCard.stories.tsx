import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { user } from 'shared/config/storybook/const/data';

import { MessageCard } from './MessageCard';

export default {
    title: 'entities/Chat/MessageCard',
    component: MessageCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof MessageCard>;

const Template: ComponentStory<typeof MessageCard> = (args) => <MessageCard {...args} />;

export const MessageFirst = Template.bind({});
MessageFirst.args = {
    id: 1,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, repellat esse! Sunt sint eum vitae cumque architecto molestiae culpa qui.',
    user,
    variant: 'first',
};

export const MessageBetween = Template.bind({});
MessageBetween.args = {
    id: 1,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, repellat esse! Sunt sint eum vitae cumque architecto molestiae culpa qui.',
    user,
    variant: 'between',
};

export const MessageLast = Template.bind({});
MessageLast.args = {
    id: 1,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, repellat esse! Sunt sint eum vitae cumque architecto molestiae culpa qui.',
    user,
    variant: 'last',
};
