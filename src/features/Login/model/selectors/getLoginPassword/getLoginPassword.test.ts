import type { StateSchema } from 'app/providers/StoreProvider';

import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword', () => {
    test('should return login password', () => {
        const state: DeepPartial<StateSchema> = {
            login: { password: 'qwerty' },
        };
        expect(getLoginPassword(state as StateSchema)).toEqual('qwerty');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {
            login: {},
        };
        expect(getLoginPassword(state as StateSchema)).toEqual(undefined);
    });
});
