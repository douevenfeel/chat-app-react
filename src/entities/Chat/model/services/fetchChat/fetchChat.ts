import { createAsyncThunk } from '@reduxjs/toolkit';

import type { ThunkConfig } from 'app/providers/StoreProvider';

import type { Chat } from '../../types/ChatSchema';

export const fetchChat = createAsyncThunk<Chat, number, ThunkConfig<string>>(
    'chat/fetchChat',
    async (id, { rejectWithValue, extra }) => {
        try {
            const response = await extra.api.get<Chat>(`/chats/${id}`).then((response) => response.data);
            if (!response) {
                throw new Error();
            }

            return response;
        } catch (error) {
            return rejectWithValue('error');
        }
    }
);
