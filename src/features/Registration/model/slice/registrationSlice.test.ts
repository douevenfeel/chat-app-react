import type { AvatarVariant } from 'shared/types/AvatarVariant';

import { fetchRegistration } from '../services/fetchRegistration/fetchRegistration';
import { fetchRegistrationConfirmCode } from '../services/fetchRegistrationConfirmCode/fetchRegistrationConfirmCode';
import { fetchRegistrationConfirmEmail } from '../services/fetchRegistrationConfirmEmail/fetchRegistrationConfirmEmail';
import type { RegistrationSchema } from '../types/RegistrationSchema';

import { registrationActions, registrationReducer } from './registrationSlice';

describe('registrationSlice', () => {
    test('test setEmail', () => {
        const state: DeepPartial<RegistrationSchema> = {};
        expect(registrationReducer(state as RegistrationSchema, registrationActions.setEmail('test@mail.ru'))).toEqual({
            email: 'test@mail.ru',
        });
    });
    test('test setConfirmCode', () => {
        const state: DeepPartial<RegistrationSchema> = {};
        expect(registrationReducer(state as RegistrationSchema, registrationActions.setConfirmCode('qwerty'))).toEqual({
            confirmCode: 'qwerty',
        });
    });
    test('test setFirstName', () => {
        const state: DeepPartial<RegistrationSchema> = {};
        expect(registrationReducer(state as RegistrationSchema, registrationActions.setFirstName('firstName'))).toEqual(
            { firstName: 'firstName' }
        );
    });
    test('test setLastName', () => {
        const state: DeepPartial<RegistrationSchema> = {};
        expect(registrationReducer(state as RegistrationSchema, registrationActions.setLastName('lastName'))).toEqual({
            lastName: 'lastName',
        });
    });
    test('test setPassword', () => {
        const state: DeepPartial<RegistrationSchema> = {};
        expect(registrationReducer(state as RegistrationSchema, registrationActions.setPassword('qwerty'))).toEqual({
            password: 'qwerty',
        });
    });

    test('test fetchRegistrationConfirmEmail.pending', () => {
        const state: DeepPartial<RegistrationSchema> = {
            isLoading: false,
        };
        expect(registrationReducer(state as RegistrationSchema, fetchRegistrationConfirmEmail.pending)).toEqual({
            isLoading: true,
        });
    });

    test('test fetchRegistrationConfirmEmail.fulfilled', () => {
        const state: DeepPartial<RegistrationSchema> = {
            isLoading: true,
        };
        const data = {
            email: 'test@mail.ru',
        };
        expect(
            registrationReducer(state as RegistrationSchema, fetchRegistrationConfirmEmail.fulfilled(data, '', data))
        ).toEqual({
            isLoading: false,
            error: undefined,
            successEmail: data.email,
        });
    });

    test('test fetchRegistrationConfirmCode.pending', () => {
        const state: DeepPartial<RegistrationSchema> = {
            isLoading: false,
        };
        expect(registrationReducer(state as RegistrationSchema, fetchRegistrationConfirmCode.pending)).toEqual({
            isLoading: true,
        });
    });

    test('test fetchRegistrationConfirmCode.fulfilled', () => {
        const state: DeepPartial<RegistrationSchema> = {
            isLoading: true,
        };

        expect(
            registrationReducer(
                state as RegistrationSchema,
                fetchRegistrationConfirmCode.fulfilled(null, '', {
                    email: 'test@mail.ru',
                    confirmCode: 'qwerty',
                })
            )
        ).toEqual({
            isConfirmed: true,
            isLoading: false,
            error: undefined,
        });
    });

    test('test fetchRegistration.pending', () => {
        const state: DeepPartial<RegistrationSchema> = {
            isLoading: false,
        };
        expect(registrationReducer(state as RegistrationSchema, fetchRegistration.pending)).toEqual({
            isLoading: true,
        });
    });

    test('test fetchRegistration.fulfilled', () => {
        const state: DeepPartial<RegistrationSchema> = {
            isLoading: true,
        };
        const data = {
            user: {
                id: 1,
                email: 'test@mail.ru',
                firstName: 'firstName',
                lastName: 'lastName',
                avatar: 'purple' as AvatarVariant,
                onlineInfo: {
                    isOnline: true,
                    lastSeen: String(Date.now()),
                },
            },
            accessToken: 'qwerty',
        };
        expect(
            registrationReducer(
                state as RegistrationSchema,
                fetchRegistration.fulfilled(data, '', {
                    email: 'test@mail.ru',
                    password: 'qwerty',
                    firstName: 'firstNae',
                    lastName: 'lastName',
                })
            )
        ).toEqual({
            isLoading: false,
            error: undefined,
        });
    });
});
