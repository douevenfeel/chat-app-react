import { createAsyncThunk } from '@reduxjs/toolkit';

import type { ThunkConfig } from 'app/providers/StoreProvider';

import type { CancelFriendRequestSchema } from '../../types/CancelFriendRequestSchema';

export const fetchCancelFriendRequest = createAsyncThunk<CancelFriendRequestSchema, number, ThunkConfig<string>>(
    'cancelFriendRequest/fetchCancelFriendRequest',
    async (id, { rejectWithValue, extra }) => {
        try {
            const response = await extra.api
                .post<CancelFriendRequestSchema>(`/friends/cancel/${id}`)
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
