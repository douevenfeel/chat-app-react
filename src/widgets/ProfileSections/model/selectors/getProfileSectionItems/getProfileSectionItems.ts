import { createSelector } from '@reduxjs/toolkit';

import { getRouteFriends } from 'shared/const/router';

import type { ProfileSectionSchema } from '../../types/ProfileSectionSchema';
import { getProfileDataId } from '../getProfileDataId/getProfileDataId';

export const getProfileSectionItems = createSelector(getProfileDataId, (id) => {
    const sidebarItemsList: ProfileSectionSchema[] = [{ title: 'Друзья', link: getRouteFriends(String(id)) }];

    return sidebarItemsList;
});
