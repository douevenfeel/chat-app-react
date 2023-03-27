import type { StateSchema } from 'app/providers/StoreProvider';

import { getFriendsCounts } from './getFriendsCounts';

describe('getFriendsCounts', () => {
    test('should return friends counts', () => {
        const state: DeepPartial<StateSchema> = {
            friends: { counts: { friends: 12, onlineFriends: 6, outcomingRequests: 3, incomingRequests: 1 } },
        };
        expect(getFriendsCounts(state as StateSchema)).toEqual({
            friends: 12,
            onlineFriends: 6,
            outcomingRequests: 3,
            incomingRequests: 1,
        });
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {
            friends: {},
        };
        expect(getFriendsCounts(state as StateSchema)).toEqual(undefined);
    });
});
