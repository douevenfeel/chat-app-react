import type { StateSchema } from 'app/providers/StoreProvider';

import { getRegistrationFirstName } from './getRegistrationFirstName';

describe('getRegistrationFirstName', () => {
    test('should return registation firstName', () => {
        const state: DeepPartial<StateSchema> = {
            registration: { firstName: 'firstName' },
        };
        expect(getRegistrationFirstName(state as StateSchema)).toEqual('firstName');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {
            registration: {},
        };
        expect(getRegistrationFirstName(state as StateSchema)).toEqual(undefined);
    });
});
