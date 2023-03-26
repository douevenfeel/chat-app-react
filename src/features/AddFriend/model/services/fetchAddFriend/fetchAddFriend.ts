import { createAsyncThunk } from '@reduxjs/toolkit';

import type { ThunkConfig } from 'app/providers/StoreProvider';

import type { AddFriendSchema } from '../../types/AddFriendSchema';

export const fetchAddFriend = createAsyncThunk<AddFriendSchema, number, ThunkConfig<string>>(
    'addFriend/fetchAddFriend',
    async (id: number, { rejectWithValue, extra }) => {
        try {
            const response = await extra.api
                .post<AddFriendSchema>(`/friends/add/${id}`)
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
