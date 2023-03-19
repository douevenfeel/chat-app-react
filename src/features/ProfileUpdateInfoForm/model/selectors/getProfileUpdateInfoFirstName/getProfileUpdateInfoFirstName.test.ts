import type { StateSchema } from 'app/providers/StoreProvider';

import { getProfileUpdateInfoFirstName } from './getProfileUpdateInfoFirstName';

describe('getProfileUpdateInfoFirstName', () => {
    test('should return profile update info first name', () => {
        const state: DeepPartial<StateSchema> = {
            profile: { updateInfoForm: { firstName: 'firstName' } },
        };
        expect(getProfileUpdateInfoFirstName(state as StateSchema)).toEqual('firstName');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {
            profile: { updateInfoForm: {} },
        };
        expect(getProfileUpdateInfoFirstName(state as StateSchema)).toEqual(undefined);
    });
});
