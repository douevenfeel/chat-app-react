import { createAsyncThunk } from '@reduxjs/toolkit';

import type { ThunkConfig } from 'app/providers/StoreProvider';

import type { DeleteFriendSchema } from '../../types/DeleteFriendSchema';

export const fetchDeleteFriend = createAsyncThunk<DeleteFriendSchema, number, ThunkConfig<string>>(
    'deleteFriend/fetchDeleteFriend',
    async (id, { rejectWithValue, extra }) => {
        try {
            const response = await extra.api
                .post<DeleteFriendSchema>(`/friends/delete/${id}`)
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
