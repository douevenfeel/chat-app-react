import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

import { fetchRegistration } from './fetchRegistration';

describe('fetchRegistration', () => {
    test('success registration', async () => {
        const data = {
            id: 1,
            email: 'test@mail.ru',
            firstName: 'firstName',
            lastName: 'lastName',
            avatar: 'purple',
            friendStatus: 0,
            onlineInfo: {
                lastSeen: String(Date.now()),
            },
        };
        const callData = { email: 'test@mail.ru', firstName: 'firstName', lastName: 'lastName', password: 'qwerty' };
        const thunk = new TestAsyncThunk(fetchRegistration);
        thunk.api.post.mockReturnValue(Promise.resolve({ data }));
        const result = await thunk.callThunk(callData);

        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('error registration', async () => {
        const data = {
            message: 'error',
        };
        const callData = { email: 'test@mail.ru', firstName: 'firstName', lastName: 'lastName', password: 'qwerty' };

        const thunk = new TestAsyncThunk(fetchRegistration);
        thunk.api.post.mockRejectedValue(Promise.resolve({ data }));
        const result = await thunk.callThunk(callData);

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual(data.message);
    });
});
