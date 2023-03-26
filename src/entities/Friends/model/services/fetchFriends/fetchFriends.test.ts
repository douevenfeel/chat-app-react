import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

import { fetchFriends } from './fetchFriends';

describe('fetchFriends', () => {
    test('success friends', async () => {
        const data = [
            {
                id: 1,
                email: 'test@mail.ru',
                firstName: 'firstName',
                lastName: 'lastName',
                avatar: 'purple',
                onlineInfo: {
                    isOnline: true,
                    lastSeen: String(Date.now()),
                },
            },
        ];
        const thunk = new TestAsyncThunk(fetchFriends);
        thunk.api.get.mockReturnValue(Promise.resolve({ data }));
        const result = await thunk.callThunk(1);

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('error friends', async () => {
        const data = {
            message: 'error',
        };

        const thunk = new TestAsyncThunk(fetchFriends);
        thunk.api.get.mockRejectedValue(Promise.resolve({ data }));
        const result = await thunk.callThunk(1);

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual(data.message);
    });
});
