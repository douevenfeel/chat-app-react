import { createAsyncThunk } from '@reduxjs/toolkit';

// eslint-disable-next-line boundaries/element-types
import type { ThunkConfig } from 'app/providers/StoreProvider';

import type { Profile } from '../../types/ProfileSchema';

export const fetchProfile = createAsyncThunk<Profile, string, ThunkConfig<string>>(
    'profile/fetchProfile',
    async (id: string, { rejectWithValue, extra }) => {
        try {
            const response = await extra.api.get<Profile>(`/users/${id}`).then((response) => response.data);
            if (!response) {
                throw new Error();
            }

            return response;
        } catch (error) {
            return rejectWithValue('error');
        }
    }
);
