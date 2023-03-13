import type { StateSchema } from 'app/providers/StoreProvider';

import { getRegistrationPassword } from './getRegistrationPassword';

describe('getRegistrationPassword', () => {
    test('should return registation password', () => {
        const state: DeepPartial<StateSchema> = {
            registration: { password: 'qwerty' },
        };
        expect(getRegistrationPassword(state as StateSchema)).toEqual('qwerty');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {
            registration: {},
        };
        expect(getRegistrationPassword(state as StateSchema)).toEqual(undefined);
    });
});
