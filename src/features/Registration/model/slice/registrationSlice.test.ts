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
});
