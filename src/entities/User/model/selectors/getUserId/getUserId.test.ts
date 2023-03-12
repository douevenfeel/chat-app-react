import type { StateSchema } from 'app/providers/StoreProvider';

import { getUserId } from './getUserId';

describe('getUserId', () => {
    test('should return user id', () => {
        const state: DeepPartial<StateSchema> = {
            user: {
                data: { id: 1 },
            },
        };
        expect(getUserId(state as StateSchema)).toEqual(1);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {
            user: {},
        };
        expect(getUserId(state as StateSchema)).toEqual(undefined);
    });
});
