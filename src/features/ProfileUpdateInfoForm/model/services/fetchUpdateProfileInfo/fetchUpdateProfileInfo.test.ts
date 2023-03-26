import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

import { fetchUpdateProfileInfo } from './fetchUpdateProfileInfo';

describe('fetchUpdateProfileInfo', () => {
    test('success update profile info', async () => {
        const data = { firstName: 'firstName', lastName: 'lastName' };
        const thunk = new TestAsyncThunk(fetchUpdateProfileInfo);
        thunk.api.put.mockReturnValue(Promise.resolve({ data }));
        const result = await thunk.callThunk(data);

        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('error update profile info', async () => {
        const data = {
            message: 'error',
        };
        const callData = { firstName: 'firstName', lastName: 'lastName' };

        const thunk = new TestAsyncThunk(fetchUpdateProfileInfo);
        thunk.api.put.mockRejectedValue(Promise.resolve({ data }));
        const result = await thunk.callThunk(callData);

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual(data.message);
    });
});
