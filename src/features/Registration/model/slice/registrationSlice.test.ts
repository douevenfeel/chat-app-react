import type { RegistrationSchema } from '../types/RegistrationSchema';

import { registrationActions, registrationReducer } from './registrationSlice';

describe('registrationSlice', () => {
    test('test set email', () => {
        const state: DeepPartial<RegistrationSchema> = {};
        expect(registrationReducer(state as RegistrationSchema, registrationActions.setEmail('test@mail.ru'))).toEqual({
            email: 'test@mail.ru',
        });
    });
    test('test set confirmCode', () => {
        const state: DeepPartial<RegistrationSchema> = {};
        expect(registrationReducer(state as RegistrationSchema, registrationActions.setConfirmCode('qwerty'))).toEqual({
            confirmCode: 'qwerty',
        });
    });
    test('test set firstName', () => {
        const state: DeepPartial<RegistrationSchema> = {};
        expect(registrationReducer(state as RegistrationSchema, registrationActions.setFirstName('firstName'))).toEqual(
            { firstName: 'firstName' }
        );
    });
    test('test set lastName', () => {
        const state: DeepPartial<RegistrationSchema> = {};
        expect(registrationReducer(state as RegistrationSchema, registrationActions.setLastName('lastName'))).toEqual({
            lastName: 'lastName',
        });
    });
    test('test set password', () => {
        const state: DeepPartial<RegistrationSchema> = {};
        expect(registrationReducer(state as RegistrationSchema, registrationActions.setPassword('qwerty'))).toEqual({
            password: 'qwerty',
        });
    });
});
