import type { StateSchema } from 'app/providers/StoreProvider';

import { getFriendsSection } from './getFriendsSection';

describe('getFriendsSection', () => {
    test('should return friends section', () => {
        const state: DeepPartial<StateSchema> = {
            friends: { section: 'online' },
        };
        expect(getFriendsSection(state as StateSchema)).toEqual('online');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {
            friends: {},
        };
        expect(getFriendsSection(state as StateSchema)).toEqual(undefined);
    });
});
