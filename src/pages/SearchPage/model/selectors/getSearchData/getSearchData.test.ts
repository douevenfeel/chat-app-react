import type { StateSchema } from 'app/providers/StoreProvider';
import { user } from 'shared/config/storybook/const/data';

import { getSearchData } from './getSearchData';

describe('getSearchData', () => {
    test('should return search data', () => {
        const state: DeepPartial<StateSchema> = {
            search: { data: { users: [user] } },
        };
        expect(getSearchData(state as StateSchema)).toEqual({ users: [user] });
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {
            search: {},
        };
        expect(getSearchData(state as StateSchema)).toEqual(undefined);
    });
});
