import type { StateSchema } from 'app/providers/StoreProvider';

import { getFriendsData } from './getFriendsData';

describe('getFriendsData', () => {
    test('should return friends data', () => {
        const state: DeepPartial<StateSchema> = {
            friends: {
                data: [
                    { id: 1, firstName: 'firstName', lastName: 'lastName', avatar: 'indigo' },
                    { id: 2, firstName: 'firstName', lastName: 'lastName', avatar: 'purple' },
                    { id: 3, firstName: 'firstName', lastName: 'lastName', avatar: 'blue' },
                ],
            },
        };
        expect(getFriendsData(state as StateSchema)).toEqual([
            { id: 1, firstName: 'firstName', lastName: 'lastName', avatar: 'indigo' },
            { id: 2, firstName: 'firstName', lastName: 'lastName', avatar: 'purple' },
            { id: 3, firstName: 'firstName', lastName: 'lastName', avatar: 'blue' },
        ]);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {
            friends: {},
        };
        expect(getFriendsData(state as StateSchema)).toEqual(undefined);
    });
});
