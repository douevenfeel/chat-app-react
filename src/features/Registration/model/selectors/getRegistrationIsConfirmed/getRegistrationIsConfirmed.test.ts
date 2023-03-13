import type { StateSchema } from 'app/providers/StoreProvider';

import { getRegistrationIsConfirmed } from './getRegistrationIsConfirmed';

describe('getRegistrationIsConfirmed', () => {
    test('should return registation isConfirmed', () => {
        const state: DeepPartial<StateSchema> = {
            registration: { isConfirmed: true },
        };
        expect(getRegistrationIsConfirmed(state as StateSchema)).toEqual(true);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {
            registration: {},
        };
        expect(getRegistrationIsConfirmed(state as StateSchema)).toEqual(undefined);
    });
});
