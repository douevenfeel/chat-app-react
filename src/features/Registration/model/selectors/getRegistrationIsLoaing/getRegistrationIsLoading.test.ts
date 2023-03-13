import type { StateSchema } from 'app/providers/StoreProvider';

import { getRegistrationIsLoading } from './getRegistrationIsLoading';

describe('getRegistrationIsLoading', () => {
    test('should return registation isLoading', () => {
        const state: DeepPartial<StateSchema> = {
            registration: { isLoading: true },
        };
        expect(getRegistrationIsLoading(state as StateSchema)).toEqual(true);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {
            registration: {},
        };
        expect(getRegistrationIsLoading(state as StateSchema)).toEqual(undefined);
    });
});
