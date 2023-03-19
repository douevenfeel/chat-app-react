import { createAsyncThunk } from '@reduxjs/toolkit';

import type { ThunkConfig } from 'app/providers/StoreProvider';

import type { ConfirmEmailData } from '../../types/RegistrationSchema';

interface RegistrationConfirmEmailProps {
    email: string;
}

export const fetchRegistrationConfirmEmail = createAsyncThunk<
    ConfirmEmailData,
    RegistrationConfirmEmailProps,
    ThunkConfig<string>
>('registrationEmailForm/fetchRegistrationConfirmEmail', async (data, { rejectWithValue, extra }) => {
    try {
        const response = await extra.api.post('/auth/confirm/email', data).then((response) => response.data);

        return response;
    } catch (error) {
        return rejectWithValue('error');
    }
});
