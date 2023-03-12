import { memo, useCallback } from 'react';

import DarkThemeIcon from 'shared/assets/icons/theme-dark.svg';
import LightThemeIcon from 'shared/assets/icons/theme-light.svg';
import { useTheme } from 'shared/lib/hooks/useTheme/useTheme';
import { Button } from 'shared/ui/Button/Button';

import cls from './ThemeSwitcher.module.scss';
export const ThemeSwitcher = memo(function ThemeSwitcher() {
    const { theme, toggleTheme } = useTheme();
    const setTheme = useCallback(() => {
        theme === 'dark' ? toggleTheme('light') : toggleTheme('dark');
    }, [theme, toggleTheme]);

    return (
        <Button
            variant='clean'
            onClick={setTheme}
        >
            {theme === 'dark' ? <DarkThemeIcon className={cls.icon} /> : <LightThemeIcon className={cls.icon} />}
        </Button>
    );
});
