import { createAsyncThunk } from '@reduxjs/toolkit';

import type { ThunkConfig } from 'app/providers/StoreProvider';
import { chatActions } from 'entities/Chat';
import type { Message } from 'shared/types/Message';

import { getChatUserId } from '../../selectors/getChatUserId/getChatUserId';

export const fetchNewMessage = createAsyncThunk<Message, string, ThunkConfig<string>>(
    'chat/fetchNewMessage',
    async (message, { dispatch, rejectWithValue, extra, getState }) => {
        try {
            const id = getChatUserId(getState());
            const response = await extra.api
                .post<Message>(`/messages/${id}`, { text: message })
                .then((response) => response.data);
            if (!response) {
                throw new Error();
            }
            dispatch(chatActions.AddMessage(response));

            return response;
        } catch (error) {
            return rejectWithValue('error');
        }
    }
);
