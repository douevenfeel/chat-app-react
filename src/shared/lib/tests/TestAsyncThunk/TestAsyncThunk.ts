import type { AsyncThunkAction } from '@reduxjs/toolkit';
import type { AxiosStatic } from 'axios';
import axios from 'axios';

import type { StateSchema, ThunkConfig } from 'app/providers/StoreProvider';

type ActionCreatorType<Return, Arg, T> = (arg: Arg) => AsyncThunkAction<Return, Arg, ThunkConfig<T>>;

jest.mock('axios');

const mockedAxios = jest.mocked(axios);

export class TestAsyncThunk<Return, Arg, T> {
    dispatch: jest.MockedFn<any>;
    getState: () => StateSchema;
    actionCreator: ActionCreatorType<Return, Arg, T>;
    api: jest.MockedFunctionDeep<AxiosStatic>;

    constructor(actionCreator: ActionCreatorType<Return, Arg, T>, state?: DeepPartial<StateSchema>) {
        this.actionCreator = actionCreator;
        this.dispatch = jest.fn();
        this.getState = jest.fn(() => state as StateSchema);
        this.api = mockedAxios;
    }

    async callThunk(arg: Arg) {
        const action = this.actionCreator(arg);
        const result = await action(this.dispatch, this.getState, { api: this.api });

        return result;
    }
}
