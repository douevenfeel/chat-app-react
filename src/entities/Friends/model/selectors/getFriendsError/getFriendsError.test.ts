import type { StateSchema } from 'app/providers/StoreProvider';

import { getFriendsError } from './getFriendsError';

describe('getFriendsError', () => {
    test('should return friends error', () => {
        const state: DeepPartial<StateSchema> = {
            friends: { error: 'error' },
        };
        expect(getFriendsError(state as StateSchema)).toEqual('error');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {
            friends: {},
        };
        expect(getFriendsError(state as StateSchema)).toEqual(undefined);
    });
});
