import { createAsyncThunk } from '@reduxjs/toolkit';

import type { ThunkConfig } from 'app/providers/StoreProvider';
import type { User } from 'shared/types/User';

export const fetchProfile = createAsyncThunk<User, number, ThunkConfig<string>>(
    'profile/fetchProfile',
    async (id: number, { rejectWithValue, extra }) => {
        try {
            const response = await extra.api.get<User>(`/users/${id}`).then((response) => response.data);
            if (!response) {
                throw new Error();
            }

            return response;
        } catch (error) {
            return rejectWithValue('error');
        }
    }
);
