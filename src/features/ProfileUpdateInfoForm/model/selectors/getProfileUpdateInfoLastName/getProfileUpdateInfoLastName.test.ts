import type { StateSchema } from 'app/providers/StoreProvider';

import { getProfileUpdateInfoLastName } from './getProfileUpdateInfoLastName';

describe('getProfileUpdateInfoLastName', () => {
    test('should return profile update info last name', () => {
        const state: DeepPartial<StateSchema> = {
            profile: { updateInfoForm: { lastName: 'lastName' } },
        };
        expect(getProfileUpdateInfoLastName(state as StateSchema)).toEqual('lastName');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {
            profile: { updateInfoForm: {} },
        };
        expect(getProfileUpdateInfoLastName(state as StateSchema)).toEqual(undefined);
    });
});
