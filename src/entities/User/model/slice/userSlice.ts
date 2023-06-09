import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { User } from 'shared/types/User';

import type { UserSchema } from '../types/UserSchema';

const initialState: UserSchema = { isChecked: false };

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setData: (state, action: PayloadAction<User>) => {
            state.data = action.payload;
        },
        setIsChecked: (state) => {
            state.isChecked = true;
        },
        logout: () => initialState,
    },
});

export const { actions: userActions, reducer: userReducer } = userSlice;
