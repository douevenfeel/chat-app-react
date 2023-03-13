import type { LoginSchema } from '../types/LoginSchema';

import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice', () => {
    test('test set email', () => {
        const state: DeepPartial<LoginSchema> = {};
        expect(loginReducer(state as LoginSchema, loginActions.setEmail('test@mail.ru'))).toEqual({
            email: 'test@mail.ru',
        });
    });
    test('test set password', () => {
        const state: DeepPartial<LoginSchema> = {};
        expect(loginReducer(state as LoginSchema, loginActions.setPassword('qwerty'))).toEqual({
            password: 'qwerty',
        });
    });
});
