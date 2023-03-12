import type { ReactNode } from 'react';
import { useMemo, useState } from 'react';

import { LOCAL_STORAGE_THEME_KEY } from 'shared/const/localStorage';
import { ThemeContext } from 'shared/lib/context/ThemeContext';
import type { Theme } from 'shared/types/Theme';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme;

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme);
    const defaultProps = useMemo(() => ({ theme, setTheme }), [theme]);

    return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};
