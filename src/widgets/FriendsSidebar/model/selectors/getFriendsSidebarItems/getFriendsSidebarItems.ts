import { createSelector } from '@reduxjs/toolkit';

import { getFriendsCounts } from 'entities/Friends';

import type { FriendsSidebarSchema } from '../../types/FriendsSidebarSchema';

export const getFriendsSidebarItems = createSelector(getFriendsCounts, (counts) => {
    const friendsSidebarItems: FriendsSidebarSchema[] = [
        { title: 'Друзья', count: counts?.friends || 0, value: 'alreadyFriend' },
        { title: 'Исходящие заявки', count: counts?.outcomingRequests || 0, value: 'outcomingRequest' },
        { title: 'Входящие заявки', count: counts?.incomingRequests || 0, value: 'incomingRequest' },
    ];

    return friendsSidebarItems;
});
