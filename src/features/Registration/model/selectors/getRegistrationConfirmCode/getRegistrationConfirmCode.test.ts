import type { StateSchema } from 'app/providers/StoreProvider';

import { getRegistrationConfirmCode } from './getRegistrationConfirmCode';

describe('getRegistrationConfirmCode', () => {
    test('should return registation confirm code', () => {
        const state: DeepPartial<StateSchema> = {
            registration: { confirmCode: 'qwerty' },
        };
        expect(getRegistrationConfirmCode(state as StateSchema)).toEqual('qwerty');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {
            registration: {},
        };
        expect(getRegistrationConfirmCode(state as StateSchema)).toEqual(undefined);
    });
});
