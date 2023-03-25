import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { fetchFriends } from '../services/fetchFriends/fetchFriends';
import type { Friend, FriendsSchema } from '../types/FriendsSchema';

const initialState: FriendsSchema = { isLoading: false };

export const friendsSlice = createSlice({
    name: 'friends',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchFriends.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchFriends.fulfilled, (state, action: PayloadAction<Friend[]>) => {
                state.isLoading = false;
                state.error = undefined;
                state.data = action.payload;
            })
            .addCase(fetchFriends.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: friendsActions, reducer: friendsReducer } = friendsSlice;
