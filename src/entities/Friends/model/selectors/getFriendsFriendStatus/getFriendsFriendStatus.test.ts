import type { StateSchema } from 'app/providers/StoreProvider';

import { getFriendsFriendStatus } from './getFriendsFriendStatus';

describe('getFriendsFriendStatus', () => {
    test('should return friends friend status', () => {
        const state: DeepPartial<StateSchema> = {
            friends: { friendStatus: 'alreadyFriend' },
        };
        expect(getFriendsFriendStatus(state as StateSchema)).toEqual('alreadyFriend');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {
            friends: {},
        };
        expect(getFriendsFriendStatus(state as StateSchema)).toEqual(undefined);
    });
});
