import type { StateSchema } from 'app/providers/StoreProvider';

import { getUserIsChecked } from './getUserIsChecked';

describe('getUserIsChecked', () => {
    test('should return user is checked', () => {
        const state: DeepPartial<StateSchema> = {
            user: { isChecked: true },
        };
        expect(getUserIsChecked(state as StateSchema)).toEqual(true);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {
            user: {},
        };
        expect(getUserIsChecked(state as StateSchema)).toEqual(undefined);
    });
});
