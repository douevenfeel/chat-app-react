import { useCallback } from 'react';

import DarkThemeIcon from 'shared/assets/icons/theme-dark.svg';
import LightThemeIcon from 'shared/assets/icons/theme-light.svg';
import { useTheme } from 'shared/lib/hooks/useTheme/useTheme';
import { Button } from 'shared/ui/Button/Button';
import { Typography } from 'shared/ui/Typography/Typography';

import cls from './ThemeSwitcher.module.scss';

export const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useTheme();
    const setTheme = useCallback(() => {
        theme === 'dark' ? toggleTheme('light') : toggleTheme('dark');
    }, [theme, toggleTheme]);

    return (
        <Button
            data-testid='themeSwitcher'
            variant='clean'
            onClick={setTheme}
        >
            <div className={cls.container}>
                {theme === 'dark' ? <DarkThemeIcon className={cls.icon} /> : <LightThemeIcon className={cls.icon} />}
                <Typography
                    className={cls.text}
                    size='small'
                    tag='p'
                    variant='secondary'
                    weight='normal'
                >
                    {theme === 'dark' ? 'Темная тема' : 'Светлая тема'}
                </Typography>
            </div>
        </Button>
    );
};
