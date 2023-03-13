import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { fetchLogin } from '../services/fetchLogin/fetchLogin';
import type { LoginSchema } from '../types/LoginSchema';

const initialState: LoginSchema = {
    email: '',
    password: '',
    isLoading: false,
};

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
    },
    extraReducers(builder) {
        builder
            .addCase(fetchLogin.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchLogin.fulfilled, (state) => {
                state.isLoading = false;
                state.error = undefined;
            })
            .addCase(fetchLogin.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
                state.password = '';
            });
    },
});

export const { actions: loginActions, reducer: loginReducer } = loginSlice;
