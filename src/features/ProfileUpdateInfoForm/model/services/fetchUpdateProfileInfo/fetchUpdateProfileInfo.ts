import { createAsyncThunk } from '@reduxjs/toolkit';

import type { ThunkConfig } from 'app/providers/StoreProvider';
import type { Profile, UpdateProfileInfo } from 'entities/Profile';
import { profileActions } from 'entities/Profile';

export const fetchUpdateProfileInfo = createAsyncThunk<Profile, UpdateProfileInfo, ThunkConfig<string>>(
    'updateProfileInfo/fetchUpdateProfileInfo',
    async (data, { dispatch, rejectWithValue, extra }) => {
        try {
            const response = await extra.api.put<Profile>('/users', data).then((response) => response.data);
            if (!response) {
                throw new Error();
            }
            dispatch(profileActions.setData(response));

            return response;
        } catch (error) {
            return rejectWithValue('error');
        }
    }
);
