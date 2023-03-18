import clsx from 'clsx';

import { useTheme } from 'shared/lib/hooks/useTheme/useTheme';

import { AppRouter } from './providers/AppRouter';

export const App = () => {
    const { theme } = useTheme();

    return (
        <div className={clsx('app', `${theme}Theme`)}>
            <AppRouter />
        </div>
    );
};
