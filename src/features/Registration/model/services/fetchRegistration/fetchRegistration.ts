import { createAsyncThunk } from '@reduxjs/toolkit';

// eslint-disable-next-line boundaries/element-types
import type { ThunkConfig } from 'app/providers/StoreProvider';
import { LOCAL_STORAGE_ACCESS_TOKEN_KEY } from 'shared/const/localStorage';

// eslint-disable-next-line no-restricted-imports
import type { User } from '../../../../../entities/User';
// eslint-disable-next-line no-restricted-imports
import { userActions } from '../../../../../entities/User';

interface RegistrationProps {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
}

export const fetchRegistration = createAsyncThunk<User, RegistrationProps, ThunkConfig<string>>(
    'registrationProfileForm/fetchRegistration',
    async (data, { dispatch, rejectWithValue, extra }) => {
        try {
            const response = await extra.api.post('/auth/registration', data).then((response) => response.data);
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
