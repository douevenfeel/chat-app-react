import { createAsyncThunk } from '@reduxjs/toolkit';

import type { ThunkConfig } from 'app/providers/StoreProvider';

export const fetchAddFriend = createAsyncThunk<unknown, number, ThunkConfig<string>>(
    'addFriend/fetchAddFriend',
    async (id, { rejectWithValue, extra }) => {
        try {
            const response = await extra.api.post(`/friends/add/${id}`).then((response) => response.data);
            if (!response) {
                throw new Error();
            }

            return response;
        } catch (error) {
            return rejectWithValue('error');
        }
    }
);
