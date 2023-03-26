import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

import { fetchDeleteFriend } from './fetchDeleteFriend';

describe('fetchDeleteFriend', () => {
    test('success delete friend', async () => {
        const data = { friendStatus: 1 };
        const thunk = new TestAsyncThunk(fetchDeleteFriend);
        thunk.api.post.mockReturnValue(Promise.resolve({ data }));
        const result = await thunk.callThunk(1);

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('error delete friend', async () => {
        const data = {
            message: 'error',
        };

        const thunk = new TestAsyncThunk(fetchDeleteFriend);
        thunk.api.post.mockRejectedValue(Promise.resolve({ data }));
        const result = await thunk.callThunk(1);

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual(data.message);
    });
});
