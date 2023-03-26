import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

import { fetchLogout } from './fetchLogout';

describe('fetchLogout', () => {
    test('success logout', async () => {
        const data = { OK: 1 };
        const thunk = new TestAsyncThunk(fetchLogout);
        thunk.api.get.mockReturnValue(Promise.resolve({ data }));
        const result = await thunk.callThunk(null);

        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('error logout', async () => {
        const data = {
            message: 'error',
        };

        const thunk = new TestAsyncThunk(fetchLogout);
        thunk.api.get.mockRejectedValue(Promise.resolve({ data }));
        const result = await thunk.callThunk(null);

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual(data.message);
    });
});
