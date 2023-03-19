import clsx from 'clsx';
import { useEffect } from 'react';

import { fetchCheckout } from 'entities/User/model/services/fetchCheckout/fetchCheckout';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useTheme } from 'shared/lib/hooks/useTheme/useTheme';

import { AppRouter } from './providers/AppRouter';

export const App = () => {
    const dispatch = useAppDispatch();
    const { theme } = useTheme();
    useEffect(() => {
        dispatch(fetchCheckout(null));
    }, [dispatch]);

    return (
        <div className={clsx('app', `${theme}Theme`)}>
            <AppRouter />
        </div>
    );
};
