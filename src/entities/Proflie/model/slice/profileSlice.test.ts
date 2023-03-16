import type { ProfileSchema } from '../types/ProfileSchema';

import { profileActions, profileReducer } from './profileSlice';

describe('profileSlice', () => {
    test('test set profile data', () => {
        const state: DeepPartial<ProfileSchema> = { data: undefined };
        expect(
            profileReducer(
                state as ProfileSchema,
                profileActions.setData({
                    id: 1,
                    email: 'test@mail.ru',
                    firstName: 'firstName',
                    lastName: 'lastName',
                    avatar: 'purple',
                    friendStatus: 'add',
                })
            )
        ).toEqual({
            data: {
                id: 1,
                email: 'test@mail.ru',
                firstName: 'firstName',
                lastName: 'lastName',
                avatar: 'purple',
                friendStatus: 'add',
            },
        });
    });
});
