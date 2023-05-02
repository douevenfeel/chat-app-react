import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { fetchFriends } from '../services/fetchFriends/fetchFriends';
import type {
    FriendsData,
    FriendsFriendStatus,
    FriendsSchema,
    FriendsSection,
    UpdateFriendStatus,
} from '../types/FriendsSchema';

const initialState: FriendsSchema = { isLoading: false, q: '', friendStatus: 'alreadyFriend', section: 'all' };

export const friendsSlice = createSlice({
    name: 'friends',
    initialState,
    reducers: {
        setFriendStatus: (state, action: PayloadAction<FriendsFriendStatus>) => {
            state.friendStatus = action.payload;
            state.data = [];
            state.q = '';
            state.section = 'all';
        },
        setQ: (state, action: PayloadAction<string>) => {
            state.q = action.payload;
        },
        setSection: (state, action: PayloadAction<FriendsSection>) => {
            state.section = action.payload;
        },
        setUpdatedFriendStatus: (state, action: PayloadAction<UpdateFriendStatus>) => {
            state.data = state.data?.map((friend) => {
                if (friend.id === action.payload.id) {
                    friend.friendStatus = action.payload.friendStatus;
                }

                return friend;
            });
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
                state.profile = action.payload.profile;
            })
            .addCase(fetchFriends.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: friendsActions, reducer: friendsReducer } = friendsSlice;
