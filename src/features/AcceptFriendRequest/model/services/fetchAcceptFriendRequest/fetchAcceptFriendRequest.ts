import { createAsyncThunk } from '@reduxjs/toolkit';

import type { ThunkConfig } from 'app/providers/StoreProvider';

export const fetchAcceptFriendRequest = createAsyncThunk<unknown, number, ThunkConfig<string>>(
    'acceptFriendRequest/fetchAcceptFriendRequest',
    async (id, { rejectWithValue, extra }) => {
        try {
            const response = await extra.api.post(`/friends/accept/${id}`).then((response) => response.data);
            if (!response) {
                throw new Error();
            }

            return response;
        } catch (error) {
            return rejectWithValue('error');
        }
    }
);
