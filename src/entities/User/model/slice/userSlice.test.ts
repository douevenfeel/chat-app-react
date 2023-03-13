import type { UserSchema } from '../types/UserSchema';

import { userActions, userReducer } from './userSlice';

describe('userSlice', () => {
    test('test set auth data', () => {
        const state: DeepPartial<UserSchema> = { data: undefined };
        expect(
            userReducer(
                state as UserSchema,
                userActions.setData({
                    id: 1,
                    email: 'test@mail.ru',
                    firstName: 'firstName',
                    lastName: 'lastName',
                    avatar: 'purple',
                })
            )
        ).toEqual({
            data: {
                id: 1,
                email: 'test@mail.ru',
                firstName: 'firstName',
                lastName: 'lastName',
                avatar: 'purple',
            },
        });
    });
});