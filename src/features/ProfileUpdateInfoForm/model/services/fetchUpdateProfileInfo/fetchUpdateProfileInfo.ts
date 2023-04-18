import { createAsyncThunk } from '@reduxjs/toolkit';

import type { ThunkConfig } from 'app/providers/StoreProvider';
import type { User } from 'shared/types/User';

// eslint-disable-next-line no-restricted-imports
import { profileActions } from '../../../../../entities/Profile';
// eslint-disable-next-line no-restricted-imports
import type { UpdateProfileInfo } from '../../../../../entities/Profile';

export const fetchUpdateProfileInfo = createAsyncThunk<User, UpdateProfileInfo, ThunkConfig<string>>(
    'updateProfileInfo/fetchUpdateProfileInfo',
    async (data, { dispatch, rejectWithValue, extra }) => {
        try {
            const response = await extra.api.put<User>('/users', data).then((response) => response.data);
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
