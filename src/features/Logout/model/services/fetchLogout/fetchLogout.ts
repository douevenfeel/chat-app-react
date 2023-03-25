import { createAsyncThunk } from '@reduxjs/toolkit';

import type { ThunkConfig } from 'app/providers/StoreProvider';
import { LOCAL_STORAGE_ACCESS_TOKEN_KEY } from 'shared/const/localStorage';

// eslint-disable-next-line no-restricted-imports
import { userActions } from '../../../../../entities/User';

export const fetchLogout = createAsyncThunk<boolean, null, ThunkConfig<string>>(
    'logout/fetchLogout',
    async (_, { dispatch, rejectWithValue, extra }) => {
        try {
            const response = await extra.api.get<boolean>('/auth/logout').then((response) => response.data);
            if (!response) {
                throw new Error();
            }

            localStorage.removeItem(LOCAL_STORAGE_ACCESS_TOKEN_KEY);
            dispatch(userActions.logout());

            return response;
        } catch (error) {
            return rejectWithValue('error');
        }
    }
);
