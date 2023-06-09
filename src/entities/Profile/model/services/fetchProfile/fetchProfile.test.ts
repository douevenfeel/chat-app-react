import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

import { fetchProfile } from './fetchProfile';

describe('fetchProfile', () => {
    test('success profile', async () => {
        const data = {
            id: 1,
            email: 'test@mail.ru',
            firstName: 'firstName',
            lastName: 'lastName',
            avatar: 'purple',
            friendStatus: 0,
            lastSeen: String(Date.now()),
        };
        const thunk = new TestAsyncThunk(fetchProfile);
        thunk.api.get.mockReturnValue(Promise.resolve({ data }));
        const result = await thunk.callThunk(1);

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('error profile', async () => {
        const data = {
            message: 'error',
        };

        const thunk = new TestAsyncThunk(fetchProfile);
        thunk.api.get.mockRejectedValue(Promise.resolve({ data }));
        const result = await thunk.callThunk(1);

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual(data.message);
    });
});
