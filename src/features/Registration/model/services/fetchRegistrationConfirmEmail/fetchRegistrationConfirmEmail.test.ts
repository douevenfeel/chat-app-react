import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

import { fetchRegistrationConfirmEmail } from './fetchRegistrationConfirmEmail';

describe('fetchRegistrationConfirmEmail', () => {
    test('success registration confirm email', async () => {
        const data = {
            email: 'test@mail.ru',
        };
        const callData = { email: 'test@mail.ru' };
        const thunk = new TestAsyncThunk(fetchRegistrationConfirmEmail);
        thunk.api.post.mockReturnValue(Promise.resolve({ data }));
        const result = await thunk.callThunk(callData);

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('error registration confirm email', async () => {
        const data = {
            message: 'error',
        };
        const callData = { email: 'test@mail.ru' };

        const thunk = new TestAsyncThunk(fetchRegistrationConfirmEmail);
        thunk.api.post.mockRejectedValue(Promise.resolve({ data }));
        const result = await thunk.callThunk(callData);

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual(data.message);
    });
});
