import type { AvatarVariant } from 'shared/types/AvatarVariant';
import type { FriendStatus } from 'shared/types/FriendStatus';

import { fetchProfile } from '../services/fetchProfile/fetchProfile';
import type { ProfileSchema } from '../types/ProfileSchema';

import { profileActions, profileReducer } from './profileSlice';

const data = {
    id: 1,
    email: 'test@mail.ru',
    firstName: 'firstName',
    lastName: 'lastName',
    avatar: 'purple' as AvatarVariant,
    friendStatus: 'possibleFriend' as FriendStatus,
    lastSeen: String(Date.now()),
};

describe('profileSlice', () => {
    test('test setData', () => {
        const state: DeepPartial<ProfileSchema> = { data: undefined };
        expect(profileReducer(state as ProfileSchema, profileActions.setData(data))).toEqual({
            data,
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
            data,
            updateInfoForm: { firstName: '', lastName: '' },
            isUpdatingInfo: false,
        };
        expect(profileReducer(state as ProfileSchema, profileActions.setIsUpdatingInfo(true))).toEqual({
            data,
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

    test('test fetchProfile.pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
        };
        expect(profileReducer(state as ProfileSchema, fetchProfile.pending)).toEqual({
            isLoading: true,
        });
    });

    test('test fetchProfile.fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
        };
        expect(profileReducer(state as ProfileSchema, fetchProfile.fulfilled(data, '', 1))).toEqual({
            isLoading: false,
            error: undefined,
            data,
        });
    });
});
