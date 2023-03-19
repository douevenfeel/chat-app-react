import type { LoginSchema } from '../types/LoginSchema';

import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice', () => {
    test('test setEmail', () => {
        const state: DeepPartial<LoginSchema> = {};
        expect(loginReducer(state as LoginSchema, loginActions.setEmail('test@mail.ru'))).toEqual({
            email: 'test@mail.ru',
        });
    });

    test('test setPassword', () => {
        const state: DeepPartial<LoginSchema> = {};
        expect(loginReducer(state as LoginSchema, loginActions.setPassword('qwerty'))).toEqual({
            password: 'qwerty',
        });
    });
});
