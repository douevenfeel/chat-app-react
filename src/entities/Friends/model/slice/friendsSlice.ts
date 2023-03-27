import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { FriendStatus } from 'shared/types/FriendStatus';

import { fetchFriends } from '../services/fetchFriends/fetchFriends';
import type { FriendsData, FriendsSchema, FriendsSection } from '../types/FriendsSchema';

const initialState: FriendsSchema = { isLoading: false, search: '', friendStatus: 'alreadyFriend', section: 'all' };

export const friendsSlice = createSlice({
    name: 'friends',
    initialState,
    reducers: {
        setFriendStatus: (state, action: PayloadAction<FriendStatus>) => {
            state.friendStatus = action.payload;
            state.search = '';
        },
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        },
        setSection: (state, action: PayloadAction<FriendsSection>) => {
            state.section = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchFriends.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchFriends.fulfilled, (state, action: PayloadAction<FriendsData>) => {
                state.isLoading = false;
                state.error = undefined;
                state.data = action.payload.friends;
                state.counts = action.payload.counts;
            })
            .addCase(fetchFriends.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: friendsActions, reducer: friendsReducer } = friendsSlice;
