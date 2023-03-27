import type { StateSchema } from 'app/providers/StoreProvider';

import { getFriendsSearch } from './getFriendsSearch';

describe('getFriendsSearch', () => {
    test('should return friends search', () => {
        const state: DeepPartial<StateSchema> = {
            friends: { search: 'firstName' },
        };
        expect(getFriendsSearch(state as StateSchema)).toEqual('firstName');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {
            friends: {},
        };
        expect(getFriendsSearch(state as StateSchema)).toEqual(undefined);
    });
});
