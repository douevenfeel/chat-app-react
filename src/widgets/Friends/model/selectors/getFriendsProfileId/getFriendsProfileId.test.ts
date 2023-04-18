import type { StateSchema } from 'app/providers/StoreProvider';

import { getFriendsProfileId } from './getFriendsProfileId';

describe('getFriendsProfileId', () => {
    test('should return friends profile id', () => {
        const state: DeepPartial<StateSchema> = {
            friends: { profile: { id: 1 } },
        };
        expect(getFriendsProfileId(state as StateSchema)).toEqual(1);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {
            friends: {},
        };
        expect(getFriendsProfileId(state as StateSchema)).toEqual(undefined);
    });
});
