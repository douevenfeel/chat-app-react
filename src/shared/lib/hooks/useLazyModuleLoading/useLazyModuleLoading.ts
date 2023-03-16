import type { Reducer } from '@reduxjs/toolkit';
import { useEffect } from 'react';
import { useStore } from 'react-redux';

import type { ReduxToolkitStore, StateSchemaKey } from 'app/providers/StoreProvider';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

export type ReducersList = {
    [key in StateSchemaKey]?: Reducer;
};

interface UseLazyModuleLoadingProps {
    reducers: ReducersList;
}

export const useLazyModuleLoading = ({ reducers }: UseLazyModuleLoadingProps) => {
    const dispatch = useAppDispatch();
    const store = useStore() as ReduxToolkitStore;

    useEffect(() => {
        Object.entries(reducers).forEach(([key, reducer]) => {
            store?.reducerManager?.add(key as StateSchemaKey, reducer);
        });
        dispatch({ type: `@INIT ${Object.keys(reducers).join(', ')} reducer` });

        return () => {
            Object.entries(reducers).forEach(([key]) => {
                store?.reducerManager?.remove(key as StateSchemaKey);
                dispatch({ type: `@DESTROY ${Object.keys(reducers).join(', ')} reducer` });
            });
        };
    }, [dispatch, reducers, store.reducerManager]);

    return;
};
