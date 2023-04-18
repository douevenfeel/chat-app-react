import type { UserSchema } from '../types/UserSchema';

import { userActions, userReducer } from './userSlice';

describe('userSlice', () => {
    test('test setData', () => {
        const state: DeepPartial<UserSchema> = { data: undefined };
        const lastSeen = String(Date.now());
        expect(
            userReducer(
                state as UserSchema,
                userActions.setData({
                    id: 1,
                    email: 'test@mail.ru',
                    firstName: 'firstName',
                    lastName: 'lastName',
                    lastSeen,
                    avatar: 'purple',
                })
            )
        ).toEqual({
            data: {
                id: 1,
                email: 'test@mail.ru',
                firstName: 'firstName',
                lastName: 'lastName',
                lastSeen,
                avatar: 'purple',
            },
        });
    });
});
