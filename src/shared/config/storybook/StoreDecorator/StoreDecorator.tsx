import type { Story } from '@storybook/react';

import type { StateSchema } from 'app/providers/StoreProvider';
import { StoreProvider } from 'app/providers/StoreProvider';
import { userReducer } from 'entities/User';
import type { ReducersList } from 'shared/lib/hooks/useLazyModuleLoading/useLazyModuleLoading';

const defaultAsyncReducers: ReducersList = {
    user: userReducer,
};

export const StoreDecorator =
    (state: DeepPartial<StateSchema>, asyncReducers?: DeepPartial<ReducersList>) => (StoryComponent: Story) =>
        (
            <StoreProvider
                asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
                initialState={state as StateSchema}
            >
                <StoryComponent />
            </StoreProvider>
        );
