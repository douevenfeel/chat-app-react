import { createContext } from 'react';

import type { Theme } from '../../types/Theme';

export interface ThemeContextProps {
    theme?: Theme;
    setTheme?: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({});
