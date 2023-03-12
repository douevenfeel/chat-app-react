import type { StateSchema } from 'app/providers/StoreProvider';

import { getLoginEmail } from './getLoginEmail';

describe('getLoginEmail', () => {
    test('should return login email', () => {
        const state: DeepPartial<StateSchema> = {
            login: { email: 'test@mail.ru' },
        };
        expect(getLoginEmail(state as StateSchema)).toEqual('test@mail.ru');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {
            login: {},
        };
        expect(getLoginEmail(state as StateSchema)).toEqual(undefined);
    });
});
