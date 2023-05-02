import type { StateSchema } from 'app/providers/StoreProvider';

import { getSearchQ } from './getSearchQ';

describe('getSearchQ', () => {
    test('should return search q', () => {
        const state: DeepPartial<StateSchema> = {
            search: { q: 'search' },
        };
        expect(getSearchQ(state as StateSchema)).toEqual('search');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {
            search: {},
        };
        expect(getSearchQ(state as StateSchema)).toEqual(undefined);
    });
});
