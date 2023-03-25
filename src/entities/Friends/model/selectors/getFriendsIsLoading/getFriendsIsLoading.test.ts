import type { StateSchema } from 'app/providers/StoreProvider';

import { getFriendsIsLoading } from './getFriendsIsLoading';

describe('getFriendsIsLoading', () => {
    test('should return friends isLoading', () => {
        const state: DeepPartial<StateSchema> = {
            friends: { isLoading: true },
        };
        expect(getFriendsIsLoading(state as StateSchema)).toEqual(true);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {
            friends: {},
        };
        expect(getFriendsIsLoading(state as StateSchema)).toEqual(undefined);
    });
});
