import type { StateSchema } from 'app/providers/StoreProvider';

import { getRegistrationEmail } from './getRegistrationEmail';

describe('getRegistrationEmail', () => {
    test('should return registation email', () => {
        const state: DeepPartial<StateSchema> = {
            registration: { email: 'test@mail.ru' },
        };
        expect(getRegistrationEmail(state as StateSchema)).toEqual('test@mail.ru');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {
            registration: {},
        };
        expect(getRegistrationEmail(state as StateSchema)).toEqual(undefined);
    });
});
