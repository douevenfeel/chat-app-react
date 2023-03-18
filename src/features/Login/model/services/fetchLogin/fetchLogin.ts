import { createAsyncThunk } from '@reduxjs/toolkit';

// eslint-disable-next-line boundaries/element-types
import type { ThunkConfig } from 'app/providers/StoreProvider';
import { LOCAL_STORAGE_ACCESS_TOKEN_KEY } from 'shared/const/localStorage';

// eslint-disable-next-line no-restricted-imports
import { userActions } from '../../../../../entities/User';
import type { LoginData } from '../../types/LoginSchema';

interface LoginProps {
    email: string;
    password: string;
}

export const fetchLogin = createAsyncThunk<LoginData, LoginProps, ThunkConfig<string>>(
    'loginForm/fetchLogin',
    async (data, { dispatch, rejectWithValue, extra }) => {
        try {
            const response = await extra.api.post<LoginData>('/auth/login', data).then((response) => response.data);
            if (!response) {
                throw new Error();
            }

            localStorage.setItem(LOCAL_STORAGE_ACCESS_TOKEN_KEY, response.accessToken);
            dispatch(userActions.setData(response.user));

            return response;
        } catch (error) {
            return rejectWithValue('error');
        }
    }
);
