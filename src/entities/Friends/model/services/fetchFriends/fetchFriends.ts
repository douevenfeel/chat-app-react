import { createAsyncThunk } from '@reduxjs/toolkit';

import type { ThunkConfig } from 'app/providers/StoreProvider';

import { getFriendsFriendStatus } from '../../selectors/getFriendsFriendStatus/getFriendsFriendStatus';
import { getFriendsSearch } from '../../selectors/getFriendsSearch/getFriendsSearch';
import { getFriendsSection } from '../../selectors/getFriendsSection/getFriendsSection';
import type { FriendsData } from '../../types/FriendsSchema';

export const fetchFriends = createAsyncThunk<FriendsData, number, ThunkConfig<string>>(
    'friends/fetchFriends',
    async (id: number, { rejectWithValue, extra, getState }) => {
        try {
            const friendStatus = getFriendsFriendStatus(getState());
            const search = getFriendsSearch(getState());
            const section = getFriendsSection(getState());
            const response = await extra.api
                .get<FriendsData>(`/friends/${id}`, { params: { status: friendStatus, q: search, section } })
                .then((response) => response.data);
            if (!response) {
                throw new Error();
            }

            return response;
        } catch (error) {
            return rejectWithValue('error');
        }
    }
);
