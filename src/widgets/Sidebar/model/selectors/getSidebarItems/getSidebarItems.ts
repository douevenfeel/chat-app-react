import { createSelector } from '@reduxjs/toolkit';

import { getUserId } from 'entities/User';
import ConversationsIcon from 'shared/assets/icons/conversations.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';
import { getRouteConversations, getRouteProfile } from 'shared/const/router';

import type { SidebarItemSchema } from '../../types/SidebarItemSchema';

export const getSidebarItems = createSelector(getUserId, (userId) => {
    const sidebarItemsList: SidebarItemSchema[] = [
        { path: getRouteProfile(String(userId)), Icon: ProfileIcon, text: 'Профиль' },
        { path: getRouteConversations(), Icon: ConversationsIcon, text: 'Сообщения' },
    ];

    return sidebarItemsList;
});
