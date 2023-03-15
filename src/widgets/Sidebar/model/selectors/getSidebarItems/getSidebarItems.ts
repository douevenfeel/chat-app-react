import { createSelector } from '@reduxjs/toolkit';

import { getUserId } from 'entities/User';
import ProfileIcon from 'shared/assets/icons/profile.svg';
import { getRouteProfile } from 'shared/const/router';

import type { SidebarItemSchema } from '../../types/SidebarItemSchema';

export const getSidebarItems = createSelector(getUserId, (userId) => {
    const sidebarItemsList: SidebarItemSchema[] = [
        { path: getRouteProfile(String(userId)), Icon: ProfileIcon, text: 'Моя страница' },
    ];

    return sidebarItemsList;
});
