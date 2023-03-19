import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { UserSchema, User } from '../types/UserSchema';

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
    },
});

export const { actions: userActions, reducer: userReducer } = userSlice;
