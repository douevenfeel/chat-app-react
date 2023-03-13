import { createAsyncThunk } from '@reduxjs/toolkit';

// eslint-disable-next-line boundaries/element-types
import type { ThunkConfig } from 'app/providers/StoreProvider';

interface RegistrationConfirmCodeProps {
    email: string;
    confirmCode: string;
}

export const fetchRegistrationConfirmCode = createAsyncThunk<null, RegistrationConfirmCodeProps, ThunkConfig<string>>(
    'registrationCodeForm/fetchRegistrationConfirmCode',
    async (data, { rejectWithValue, extra }) => {
        try {
            const response = await extra.api.post('/auth/confirm/code', data).then((response) => response.data);

            return response;
        } catch (error) {
            return rejectWithValue('error');
        }
    }
);
