import type { StateSchema } from 'app/providers/StoreProvider';

import { getFriendsQ } from './getFriendsQ';

describe('getFriendsQ', () => {
    test('should return friends search', () => {
        const state: DeepPartial<StateSchema> = {
            friends: { q: 'firstName' },
        };
        expect(getFriendsQ(state as StateSchema)).toEqual('firstName');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {
            friends: {},
        };
        expect(getFriendsQ(state as StateSchema)).toEqual(undefined);
    });
});
