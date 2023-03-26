import { createAsyncThunk } from '@reduxjs/toolkit';

import type { ThunkConfig } from 'app/providers/StoreProvider';

import type { AcceptFriendRequestSchema } from '../../types/AcceptFriendRequestSchema';

export const fetchAcceptFriendRequest = createAsyncThunk<AcceptFriendRequestSchema, number, ThunkConfig<string>>(
    'acceptFriendRequest/fetchAcceptFriendRequest',
    async (id, { rejectWithValue, extra }) => {
        try {
            const response = await extra.api
                .post<AcceptFriendRequestSchema>(`/friends/accept/${id}`)
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
