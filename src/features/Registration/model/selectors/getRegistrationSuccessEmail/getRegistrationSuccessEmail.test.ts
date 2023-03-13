import type { StateSchema } from 'app/providers/StoreProvider';

import { getRegistrationSuccessEmail } from './getRegistrationSuccessEmail';

describe('getRegistrationSuccessEmail', () => {
    test('should return registation email', () => {
        const state: DeepPartial<StateSchema> = {
            registration: { successEmail: 'test@mail.ru' },
        };
        expect(getRegistrationSuccessEmail(state as StateSchema)).toEqual('test@mail.ru');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {
            registration: {},
        };
        expect(getRegistrationSuccessEmail(state as StateSchema)).toEqual(undefined);
    });
});
