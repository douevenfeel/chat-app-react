import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

import { fetchLogin } from './fetchLogin';

describe('fetchLogin', () => {
    test('success login', async () => {
        const data = {
            id: 1,
            email: 'test@mail.ru',
            firstName: 'firstName',
            lastName: 'lastName',
            avatar: 'indigo',
            onlineInfo: {
                isOnline: true,
                lastSeen: String(Date.now()),
            },
        };

        const thunk = new TestAsyncThunk(fetchLogin);
        thunk.api.post.mockReturnValue(Promise.resolve({ data }));
        const result = await thunk.callThunk({ email: 'test@mail.ru', password: 'qwerty' });

        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('error login', async () => {
        const data = {
            message: 'error',
        };

        const thunk = new TestAsyncThunk(fetchLogin);
        thunk.api.post.mockRejectedValue(Promise.resolve({ data }));
        const result = await thunk.callThunk({ email: 'test@mail.ru', password: 'qwerty' });

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual(data.message);
    });
});
