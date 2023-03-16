import type { StateSchema } from 'app/providers/StoreProvider';

import { getProfileData } from './getProfileData';

describe('getProfileData', () => {
    test('should return profile data', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                data: { id: 1, email: 'test@mail.ru', firstName: 'firstName', lastName: 'lastName', avatar: 'indigo' },
            },
        };
        expect(getProfileData(state as StateSchema)).toEqual({
            id: 1,
            email: 'test@mail.ru',
            firstName: 'firstName',
            lastName: 'lastName',
            avatar: 'indigo',
        });
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {},
        };
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});
