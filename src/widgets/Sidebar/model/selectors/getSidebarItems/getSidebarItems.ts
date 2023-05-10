import { createSelector } from '@reduxjs/toolkit';

import { getUserId } from 'entities/User';
import ConversationsIcon from 'shared/assets/icons/conversations.svg';
import FriendsIcon from 'shared/assets/icons/friends.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';
import SearchIcon from 'shared/assets/icons/search.svg';
import { getRouteChats, getRouteFriends, getRouteProfile, getRouteSearch } from 'shared/const/router';

import type { SidebarItemSchema } from '../../types/SidebarItemSchema';

export const getSidebarItems = createSelector(getUserId, (userId) => {
    const sidebarItemsList: SidebarItemSchema[] = [
        { path: getRouteProfile(String(userId)), Icon: ProfileIcon, text: 'Моя страница' },
        { path: getRouteFriends(String(userId)), Icon: FriendsIcon, text: 'Друзья' },
        { path: getRouteChats(), Icon: ConversationsIcon, text: 'Мессенджер' },
        { path: getRouteSearch(), Icon: SearchIcon, text: 'Поиск' },
    ];

    return sidebarItemsList;
});
