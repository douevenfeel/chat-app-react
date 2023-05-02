import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { searchReducer } from 'entities/Search';
import type { SearchCounts } from 'entities/Search/model/types/SearchSchema';
import { userReducer } from 'entities/User';
import { user } from 'shared/config/storybook/const/data';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import type { User } from 'shared/types/User';

import SearchPage from './SearchPage';

export default {
    title: 'pages/SearchPage',
    component: SearchPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof SearchPage>;

const Template: ComponentStory<typeof SearchPage> = () => <SearchPage />;

const data: User = {
    id: 1,
    avatar: 'indigo',
    email: 'test@mail.ru',
    firstName: 'firstName',
    lastName: 'lastName',
    lastSeen: String(Date.now()),
};

const users = [{ ...user }, { ...user, id: 2 }, { ...user, id: 3 }];

const counts: SearchCounts = { communities: 6, musics: 6, posts: 6, users: 6, videos: 6 };

export const SectionAll = Template.bind({});
SectionAll.decorators = [
    StoreDecorator(
        {
            user: { data },
            search: {
                data: {
                    communities: [],
                    musics: [],
                    posts: [],
                    users,
                    videos: [],
                },
                section: 'all',
                counts,
            },
        },
        { user: userReducer, search: searchReducer }
    ),
];

export const SectionUsers = Template.bind({});
SectionUsers.decorators = [
    StoreDecorator(
        {
            user: { data },
            search: {
                data: {
                    communities: [],
                    musics: [],
                    posts: [],
                    users,
                    videos: [],
                },
                section: 'users',
                counts,
            },
        },
        { user: userReducer, search: searchReducer }
    ),
];
