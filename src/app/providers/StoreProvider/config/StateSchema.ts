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

import type { ChatSchema } from 'entities/Chat';
import type { ChatsSchema } from 'entities/Chats';
import type { FriendsSchema } from 'entities/Friends';
import type { ProfileSchema } from 'entities/Profile';
import type { SearchSchema } from 'entities/Search';
import type { UserSchema } from 'entities/User';
import type { LoginSchema } from 'features/Login';
import type { RegistrationSchema } from 'features/Registration';

export interface StateSchema {
    user: UserSchema;
    login?: LoginSchema;
    registration?: RegistrationSchema;
    profile?: ProfileSchema;
    friends?: FriendsSchema;
    search?: SearchSchema;
    chats?: ChatsSchema;
    chat?: ChatSchema;
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
