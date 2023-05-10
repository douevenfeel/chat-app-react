import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { Message } from 'shared/types/Message';

import { fetchChat } from '../services/fetchChat/fetchChat';
import type { Chat, ChatSchema } from '../types/ChatSchema';

const initialState: ChatSchema = {
    message: '',
    isLoading: false,
};

export const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        setMessage: (state, action: PayloadAction<string>) => {
            state.message = action.payload;
        },
        AddMessage: (state, action: PayloadAction<Message>) => {
            state.message = '';
            if (state.data) {
                state.data.messages.push(action.payload);
            }
        },
    },
    extraReducers(builder) {
        builder
            .addCase(fetchChat.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchChat.fulfilled, (state, action: PayloadAction<Chat>) => {
                state.isLoading = false;
                state.error = undefined;
                state.data = action.payload;
            })
            .addCase(fetchChat.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: chatActions, reducer: chatReducer } = chatSlice;
