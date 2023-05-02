import { createAsyncThunk } from '@reduxjs/toolkit';

import type { ThunkConfig } from 'app/providers/StoreProvider';

import { getFriendsFriendStatus } from '../../selectors/getFriendsFriendStatus/getFriendsFriendStatus';
import { getFriendsQ } from '../../selectors/getFriendsQ/getFriendsQ';
import { getFriendsSection } from '../../selectors/getFriendsSection/getFriendsSection';
import type { FriendsData } from '../../types/FriendsSchema';

export const fetchFriends = createAsyncThunk<FriendsData, number, ThunkConfig<string>>(
    'friends/fetchFriends',
    async (id: number, { rejectWithValue, extra, getState }) => {
        try {
            const friendStatus = getFriendsFriendStatus(getState());
            const q = getFriendsQ(getState());
            const section = getFriendsSection(getState());
            const response = await extra.api
                .get<FriendsData>(`/friends/${id}`, { params: { status: friendStatus, q, section } })
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
