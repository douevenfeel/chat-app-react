import { createAsyncThunk } from '@reduxjs/toolkit';

import type { ThunkConfig } from 'app/providers/StoreProvider';

import type { Friend } from '../../types/FriendsSchema';

export const fetchFriends = createAsyncThunk<Friend[], number, ThunkConfig<string>>(
    'friends/fetchFriends',
    async (id: number, { rejectWithValue, extra }) => {
        try {
            const response = await extra.api.get<Friend[]>(`/friends/${id}`).then((response) => response.data);
            if (!response) {
                throw new Error();
            }

            return response;
        } catch (error) {
            return rejectWithValue('error');
        }
    }
);
