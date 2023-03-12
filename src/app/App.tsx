import clsx from 'clsx';

import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { useTheme } from 'shared/lib/hooks/useTheme/useTheme';
export const App = () => {
    const { theme } = useTheme();
    return (
        <div className={clsx('app', `${theme}Theme`)}>
            <ThemeSwitcher />
        </div>
    );
};
