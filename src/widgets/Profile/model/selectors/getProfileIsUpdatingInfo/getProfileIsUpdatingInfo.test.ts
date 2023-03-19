import type { StateSchema } from 'app/providers/StoreProvider';

import { getProfileIsUpdatingInfo } from './getProfileIsUpdatingInfo';

describe('getProfileIsEditingInfo', () => {
    test('should return profile is updating info', () => {
        const state: DeepPartial<StateSchema> = {
            profile: { isUpdatingInfo: true },
        };
        expect(getProfileIsUpdatingInfo(state as StateSchema)).toEqual(true);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {},
        };
        expect(getProfileIsUpdatingInfo(state as StateSchema)).toEqual(undefined);
    });
});
