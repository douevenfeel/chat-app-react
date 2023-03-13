import type { StateSchema } from 'app/providers/StoreProvider';

import { getRegistrationLastName } from './getRegistrationLastName';

describe('getRegistrationLastName', () => {
    test('should return registation lastName', () => {
        const state: DeepPartial<StateSchema> = {
            registration: { lastName: 'lastName' },
        };
        expect(getRegistrationLastName(state as StateSchema)).toEqual('lastName');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {
            registration: {},
        };
        expect(getRegistrationLastName(state as StateSchema)).toEqual(undefined);
    });
});
