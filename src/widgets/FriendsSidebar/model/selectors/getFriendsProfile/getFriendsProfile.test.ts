import type { StateSchema } from 'app/providers/StoreProvider';

import { getFriendsProfile } from './getFriendsProfile';

describe('getFriendsProfile', () => {
    test('should return friends profile', () => {
        const lastSeen = String(Date.now());
        const state: DeepPartial<StateSchema> = {
            friends: {
                profile: {
                    id: 1,
                    email: 'test@mail.ru',
                    firstName: 'firstName',
                    lastName: 'lastName',
                    avatar: 'purple',
                    lastSeen,
                },
            },
        };
        expect(getFriendsProfile(state as StateSchema)).toEqual({
            id: 1,
            email: 'test@mail.ru',
            firstName: 'firstName',
            lastName: 'lastName',
            avatar: 'purple',
            lastSeen,
        });
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {
            friends: {},
        };
        expect(getFriendsProfile(state as StateSchema)).toEqual(undefined);
    });
});
