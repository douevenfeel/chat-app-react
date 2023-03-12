import { useContext } from 'react';

import { LOCAL_STORAGE_THEME_KEY } from 'shared/const/localStorage';
import { ThemeContext } from 'shared/lib/context/ThemeContext';
import type { Theme } from 'shared/types/Theme';

export const useTheme = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = (theme: Theme) => {
        setTheme?.(theme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
    };

    return {
        theme: theme || 'dark',
        toggleTheme,
    };
};
