import type { AvatarVariant } from 'shared/types/AvatarVariant';

import { fetchLogin } from '../services/fetchLogin/fetchLogin';
import type { LoginSchema } from '../types/LoginSchema';

import { loginActions, loginReducer } from './loginSlice';

const data = {
    user: {
        id: 1,
        email: 'test@mail.ru',
        firstName: 'firstName',
        lastName: 'lastName',
        avatar: 'purple' as AvatarVariant,
        onlineInfo: {
            lastSeen: String(Date.now()),
        },
    },
    accessToken: 'qwerty',
};

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

    test('test fetchLogin.pending', () => {
        const state: DeepPartial<LoginSchema> = {
            isLoading: false,
        };
        expect(loginReducer(state as LoginSchema, fetchLogin.pending)).toEqual({
            isLoading: true,
        });
    });

    test('test fetchLogin.fulfilled', () => {
        const state: DeepPartial<LoginSchema> = {
            isLoading: true,
        };
        expect(
            loginReducer(
                state as LoginSchema,
                fetchLogin.fulfilled(data, '', { email: 'test@mail.ru', password: 'qwerty' })
            )
        ).toEqual({
            isLoading: false,
            error: undefined,
        });
    });
});
