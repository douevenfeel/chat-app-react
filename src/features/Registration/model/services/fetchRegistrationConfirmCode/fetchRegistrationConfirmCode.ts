import { createAsyncThunk } from '@reduxjs/toolkit';

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
