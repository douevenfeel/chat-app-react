import type { StateSchema } from 'app/providers/StoreProvider';

import { getProfileDataId } from './getProfileDataId';

describe('getProfileDataId', () => {
    test('should return profile data id', () => {
        const state: DeepPartial<StateSchema> = {
            profile: { data: { id: 1 } },
        };
        expect(getProfileDataId(state as StateSchema)).toEqual(1);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {},
        };
        expect(getProfileDataId(state as StateSchema)).toEqual(undefined);
    });
});
