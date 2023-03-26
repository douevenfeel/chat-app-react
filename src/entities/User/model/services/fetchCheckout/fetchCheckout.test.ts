import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

import { fetchCheckout } from './fetchCheckout';

describe('fetchCheckout', () => {
    test('success ckeckout', async () => {
        const data = {
            id: 1,
            email: 'test@mail.ru',
            firstName: 'firstName',
            lastName: 'lastName',
            avatar: 'purple',
            friendStatus: 0,
            onlineInfo: {
                isOnline: true,
                lastSeen: String(Date.now()),
            },
        };
        const thunk = new TestAsyncThunk(fetchCheckout);
        thunk.api.get.mockReturnValue(Promise.resolve({ data }));
        const result = await thunk.callThunk(null);

        expect(thunk.dispatch).toHaveBeenCalledTimes(4);
        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('error ckeckout', async () => {
        const data = {
            message: 'error',
        };

        const thunk = new TestAsyncThunk(fetchCheckout);
        thunk.api.get.mockRejectedValue(Promise.resolve({ data }));
        const result = await thunk.callThunk(null);

        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual(data.message);
    });
});
