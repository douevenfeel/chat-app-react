import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { fetchAllChats } from '../services/fetchAllChats/fetchAllChats';
import type { Chat, ChatsSchema } from '../types/ChatsSchema';

const initialState: ChatsSchema = { isLoading: false };

export const chatsSlice = createSlice({
    name: 'chats',
    initialState,
    reducers: {
        setData: (state, action: PayloadAction<Chat[]>) => {
            state.data = action.payload;
        },
    },
    extraReducers(builder) {
        builder
            .addCase(fetchAllChats.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchAllChats.fulfilled, (state, action: PayloadAction<Chat[]>) => {
                state.isLoading = false;
                state.error = undefined;
                state.data = action.payload;
            })
            .addCase(fetchAllChats.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: chatsActions, reducer: chatsReducer } = chatsSlice;
