import type { StateSchema } from 'app/providers/StoreProvider';

import { getSearchCounts } from './getSearchCounts';

describe('getSearchCounts', () => {
    test('should return search counts', () => {
        const state: DeepPartial<StateSchema> = { search: { counts: { users: 1 } } };
        expect(getSearchCounts(state as StateSchema)).toEqual({ users: 1 });
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = { search: {} };
        expect(getSearchCounts(state as StateSchema)).toEqual(undefined);
    });
});
