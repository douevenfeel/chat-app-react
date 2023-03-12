import type {
    AnyAction,
    CombinedState,
    MiddlewareArray,
    Reducer,
    ReducersMapObject,
    ThunkMiddleware,
} from '@reduxjs/toolkit';
import type { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
import type { AxiosInstance } from 'axios';

import type { UserSchema } from 'entities/User';
import type { LoginSchema } from 'features/Login';

export interface StateSchema {
    user: UserSchema;
    login?: LoginSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}

export interface ReduxToolkitStore
    extends ToolkitStore<
        CombinedState<StateSchema>,
        AnyAction,
        MiddlewareArray<[ThunkMiddleware<CombinedState<StateSchema>, AnyAction, ThunkExtraArg>]>
    > {
    reducerManager?: ReducerManager;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema;
}
