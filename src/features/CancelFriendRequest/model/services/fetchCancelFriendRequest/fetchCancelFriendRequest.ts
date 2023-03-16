import { createAsyncThunk } from '@reduxjs/toolkit';

// eslint-disable-next-line boundaries/element-types
import type { ThunkConfig } from 'app/providers/StoreProvider';

export const fetchCancelFriendRequest = createAsyncThunk<unknown, number, ThunkConfig<string>>(
    'cancelFriendRequest/fetchCancelFriendRequest',
    async (id, { rejectWithValue, extra }) => {
        try {
            const response = await extra.api.post(`/friends/cancel/${id}`).then((response) => response.data);
            if (!response) {
                throw new Error();
            }

            return response;
        } catch (error) {
            return rejectWithValue('error');
        }
    }
);
