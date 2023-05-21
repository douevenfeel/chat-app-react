import { createAsyncThunk } from '@reduxjs/toolkit';

import type { ThunkConfig } from 'app/providers/StoreProvider';

import { getChatUserId } from '../../selectors/getChatUserId/getChatUserId';

export const fetchNewMessage = createAsyncThunk<unknown, string, ThunkConfig<string>>(
    'chat/fetchNewMessage',
    async (message, { rejectWithValue, extra, getState }) => {
        try {
            const id = getChatUserId(getState());
            const response = await extra.api
                .post<unknown>(`/messages/${id}`, { text: message })
                .then((response) => response.data);

            return response;
        } catch (error) {
            return rejectWithValue('error');
        }
    }
);
