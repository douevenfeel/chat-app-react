import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { SearchForm } from './SearchForm';

export default {
    title: 'entities/SearchForm',
    component: SearchForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof SearchForm>;

const Template: ComponentStory<typeof SearchForm> = (args) => <SearchForm {...args} />;

export const Empty = Template.bind({});
Empty.args = {
    q: '',
};

export const Filled = Template.bind({});
Filled.args = {
    q: 'search',
};
