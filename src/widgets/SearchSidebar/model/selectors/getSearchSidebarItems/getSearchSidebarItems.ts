import { createSelector } from '@reduxjs/toolkit';

import { getSearchCounts } from 'entities/Search';

import type { SearchSidebarSchema } from '../../types/SearchSidebarSchema';

export const getSearchSidebarItems = createSelector(getSearchCounts, (counts) => {
    const friendsSidebarItems: SearchSidebarSchema[] = [
        {
            title: 'Все',
            count: (counts && Object.values(counts).reduce((acc, cur) => (acc += cur), 0)) || 0,
            value: 'all',
        },
        { title: 'Пользователи', count: counts?.users || 0, value: 'users' },
        { title: 'Новости', count: counts?.posts || 0, value: 'posts' },
        { title: 'Сообщества', count: counts?.communities || 0, value: 'communities' },
        { title: 'Аудиозаписи', count: counts?.musics || 0, value: 'musics' },
        { title: 'Видеозаписи', count: counts?.videos || 0, value: 'videos' },
    ];

    return friendsSidebarItems;
});
