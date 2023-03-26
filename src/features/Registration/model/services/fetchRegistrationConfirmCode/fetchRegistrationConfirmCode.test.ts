import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

import { fetchRegistrationConfirmCode } from './fetchRegistrationConfirmCode';

describe('fetchRegistrationConfirmCode', () => {
    test('success registration confirm code', async () => {
        const data = {
            email: 'test@mail.ru',
            confirmCode: 'qwerty',
        };
        const callData = { email: 'test@mail.ru', confirmCode: 'qwerty' };
        const thunk = new TestAsyncThunk(fetchRegistrationConfirmCode);
        thunk.api.post.mockReturnValue(Promise.resolve({ data }));
        const result = await thunk.callThunk(callData);

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('error registration confirm code', async () => {
        const data = {
            message: 'error',
        };
        const callData = { email: 'test@mail.ru', confirmCode: 'qwerty' };

        const thunk = new TestAsyncThunk(fetchRegistrationConfirmCode);
        thunk.api.post.mockRejectedValue(Promise.resolve({ data }));
        const result = await thunk.callThunk(callData);

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual(data.message);
    });
});
