import { createAsyncThunk } from '@reduxjs/toolkit';

// eslint-disable-next-line boundaries/element-types
import type { ThunkConfig } from 'app/providers/StoreProvider';

export const fetchDeleteFriend = createAsyncThunk<unknown, number, ThunkConfig<string>>(
    'deleteFriend/fetchDeleteFriend',
    async (id, { rejectWithValue, extra }) => {
        try {
            const response = await extra.api.post(`/friends/delete/${id}`).then((response) => response.data);
            if (!response) {
                throw new Error();
            }

            return response;
        } catch (error) {
            return rejectWithValue('error');
        }
    }
);
