import clsx from 'clsx';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { chatsReducer } from 'entities/Chats/model/slice/chatsSlice';
import { getUserIsChecked } from 'entities/User';
import { fetchCheckout } from 'entities/User/model/services/fetchCheckout/fetchCheckout';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import type { ReducersList } from 'shared/lib/hooks/useLazyModuleLoading/useLazyModuleLoading';
import { useLazyModuleLoading } from 'shared/lib/hooks/useLazyModuleLoading/useLazyModuleLoading';
import { useTheme } from 'shared/lib/hooks/useTheme/useTheme';

import { AppRouter } from './providers/AppRouter';

const initialReducers: ReducersList = {
    chats: chatsReducer,
};

export const App = () => {
    useLazyModuleLoading({ reducers: initialReducers });
    const dispatch = useAppDispatch();
    const { theme } = useTheme();
    const isChecked = useSelector(getUserIsChecked);
    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            !isChecked && dispatch(fetchCheckout(null));
        }
    }, [dispatch, isChecked]);
    useEffect(() => {
        document.body.className = `${theme}Theme`;
    }, [theme]);

    return <div className={clsx('app')}>{isChecked && <AppRouter />}</div>;
};
