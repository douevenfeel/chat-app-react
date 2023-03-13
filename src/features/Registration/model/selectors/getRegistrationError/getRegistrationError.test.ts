import type { StateSchema } from 'app/providers/StoreProvider';

import { getRegistrationError } from './getRegistrationError';

describe('getRegistrationError', () => {
    test('should return registation error', () => {
        const state: DeepPartial<StateSchema> = {
            registration: { error: 'error' },
        };
        expect(getRegistrationError(state as StateSchema)).toEqual('error');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {
            registration: {},
        };
        expect(getRegistrationError(state as StateSchema)).toEqual(undefined);
    });
});
