import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { FriendStatus } from 'shared/types/FriendStatus';
import type { User } from 'shared/types/User';

import { fetchProfile } from '../services/fetchProfile/fetchProfile';
import type { ProfileSchema } from '../types/ProfileSchema';

const initialState: ProfileSchema = {
    data: undefined,
    updateInfoForm: {
        firstName: '',
        lastName: '',
    },
    isLoading: false,
    isUpdatingInfo: false,
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setData: (state, action: PayloadAction<User>) => {
            state.data = action.payload;
            state.isUpdatingInfo = false;
        },
        setIsUpdatingInfo: (state, action: PayloadAction<boolean>) => {
            state.isUpdatingInfo = action.payload;
            state.updateInfoForm.firstName = state.data?.firstName || '';
            state.updateInfoForm.lastName = state.data?.lastName || '';
        },
        setUpdateFirstName: (state, action: PayloadAction<string>) => {
            state.updateInfoForm.firstName = action.payload;
        },
        setUpdateLastName: (state, action: PayloadAction<string>) => {
            state.updateInfoForm.lastName = action.payload;
        },
        setUpdatedFriendStatus: (state, action: PayloadAction<FriendStatus>) => {
            if (state.data) {
                state.data.friendStatus = action.payload;
            }
        },
    },
    extraReducers(builder) {
        builder
            .addCase(fetchProfile.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchProfile.fulfilled, (state, action: PayloadAction<User>) => {
                state.isLoading = false;
                state.error = undefined;
                state.data = action.payload;
            })
            .addCase(fetchProfile.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: profileActions, reducer: profileReducer } = profileSlice;
