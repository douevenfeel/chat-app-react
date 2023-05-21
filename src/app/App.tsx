import clsx from 'clsx';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { getUserIsChecked } from 'entities/User';
import { fetchCheckout } from 'entities/User/model/services/fetchCheckout/fetchCheckout';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useTheme } from 'shared/lib/hooks/useTheme/useTheme';

import { AppRouter } from './providers/AppRouter';

export const App = () => {
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
