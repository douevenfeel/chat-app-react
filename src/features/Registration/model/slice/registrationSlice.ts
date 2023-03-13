import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { fetchRegistrationConfirmCode } from '../services/fetchRegistrationConfirmCode/fetchRegistrationConfirmCode';
import type { ConfirmEmailData, RegistrationSchema } from '../types/RegistrationSchema';

import { fetchRegistration } from './../services/fetchRegistration/fetchRegistration';
import { fetchRegistrationConfirmEmail } from './../services/fetchRegistrationConfirmEmail/fetchRegistrationConfirmEmail';

const initialState: RegistrationSchema = {
    email: '',
    successEmail: undefined,
    isLoading: false,
};

export const registrationSlice = createSlice({
    name: 'registration',
    initialState,
    reducers: {
        setEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload;
        },
        setConfirmCode: (state, action: PayloadAction<string>) => {
            state.confirmCode = action.payload;
        },
        setFirstName: (state, action: PayloadAction<string>) => {
            state.firstName = action.payload;
        },
        setLastName: (state, action: PayloadAction<string>) => {
            state.lastName = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
    },
    extraReducers(builder) {
        builder
            .addCase(fetchRegistrationConfirmEmail.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchRegistrationConfirmEmail.fulfilled, (state, action: PayloadAction<ConfirmEmailData>) => {
                state.error = undefined;
                state.isLoading = false;
                state.successEmail = action.payload.email;
            })
            .addCase(fetchRegistrationConfirmEmail.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(fetchRegistrationConfirmCode.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchRegistrationConfirmCode.fulfilled, (state) => {
                state.error = undefined;
                state.isLoading = false;
                state.isConfirmed = true;
            })
            .addCase(fetchRegistrationConfirmCode.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(fetchRegistration.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchRegistration.fulfilled, (state) => {
                state.error = undefined;
                state.isLoading = false;
            })
            .addCase(fetchRegistration.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: registrationActions, reducer: registrationReducer } = registrationSlice;
