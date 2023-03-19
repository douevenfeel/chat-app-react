import { createAsyncThunk } from '@reduxjs/toolkit';

import type { ThunkConfig } from 'app/providers/StoreProvider';
import { LOCAL_STORAGE_ACCESS_TOKEN_KEY } from 'shared/const/localStorage';

import { userActions } from '../../slice/userSlice';
import type { CheckoutData } from '../../types/UserSchema';

export const fetchCheckout = createAsyncThunk<CheckoutData, null, ThunkConfig<string>>(
    'user/fetchCheckout',
    async (_, { dispatch, rejectWithValue, extra }) => {
        try {
            const response = await extra.api.get<CheckoutData>('/auth/checkout').then((response) => response.data);
            if (!response) {
                throw new Error();
            }

            localStorage.setItem(LOCAL_STORAGE_ACCESS_TOKEN_KEY, response.accessToken);
            dispatch(userActions.setData(response.user));

            return response;
        } catch (error) {
            return rejectWithValue('error');
        } finally {
            dispatch(userActions.setIsChecked());
        }
    }
);
