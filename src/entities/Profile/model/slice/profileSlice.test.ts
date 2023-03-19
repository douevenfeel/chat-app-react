import type { ProfileSchema } from '../types/ProfileSchema';

import { profileActions, profileReducer } from './profileSlice';

describe('profileSlice', () => {
    test('test setData', () => {
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
            isUpdatingInfo: false,
        });
    });

    test('test setIsUpdatingInfo with empty store', () => {
        const state: DeepPartial<ProfileSchema> = {
            updateInfoForm: { firstName: '', lastName: '' },
        };
        expect(profileReducer(state as ProfileSchema, profileActions.setIsUpdatingInfo(true))).toEqual({
            updateInfoForm: { firstName: '', lastName: '' },
            isUpdatingInfo: true,
        });
    });

    test('test setIsUpdatingInfo', () => {
        const state: DeepPartial<ProfileSchema> = {
            data: {
                id: 1,
                email: 'test@mail.ru',
                firstName: 'firstName',
                lastName: 'lastName',
                avatar: 'indigo',
            },
            updateInfoForm: { firstName: '', lastName: '' },
            isUpdatingInfo: false,
        };
        expect(profileReducer(state as ProfileSchema, profileActions.setIsUpdatingInfo(true))).toEqual({
            data: {
                id: 1,
                email: 'test@mail.ru',
                firstName: 'firstName',
                lastName: 'lastName',
                avatar: 'indigo',
            },
            updateInfoForm: { firstName: 'firstName', lastName: 'lastName' },
            isUpdatingInfo: true,
        });
    });

    test('test setUpdateFirstName', () => {
        const state: DeepPartial<ProfileSchema> = {
            updateInfoForm: { firstName: '', lastName: '' },
        };
        expect(profileReducer(state as ProfileSchema, profileActions.setUpdateFirstName('firstName'))).toEqual({
            updateInfoForm: {
                firstName: 'firstName',
                lastName: '',
            },
        });
    });

    test('test setUpdateLastName', () => {
        const state: DeepPartial<ProfileSchema> = {
            updateInfoForm: { firstName: '', lastName: '' },
        };
        expect(profileReducer(state as ProfileSchema, profileActions.setUpdateLastName('lastName'))).toEqual({
            updateInfoForm: {
                firstName: '',
                lastName: 'lastName',
            },
        });
    });
});
