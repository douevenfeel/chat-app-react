import { createAsyncThunk } from '@reduxjs/toolkit';

import type { ThunkConfig } from 'app/providers/StoreProvider';

import type { Chat } from '../../types/ChatsSchema';

export const fetchAllChats = createAsyncThunk<Chat[], null, ThunkConfig<string>>(
    'chats/fetchAllChats',
    async (_, { rejectWithValue, extra }) => {
        try {
            const response = await extra.api.get<Chat[]>('/chats').then((response) => response.data);
            if (!response) {
                throw new Error();
            }

            return response;
        } catch (error) {
            return rejectWithValue('error');
        }
    }
);
