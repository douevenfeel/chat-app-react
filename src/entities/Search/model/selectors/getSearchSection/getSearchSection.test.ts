import type { StateSchema } from 'app/providers/StoreProvider';

import { getSearchSection } from './getSearchSection';

describe('getSearchSection', () => {
    test('should return search section', () => {
        const state: DeepPartial<StateSchema> = { search: { section: 'all' } };
        expect(getSearchSection(state as StateSchema)).toEqual('all');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = { search: {} };
        expect(getSearchSection(state as StateSchema)).toEqual(undefined);
    });
});
