import { render } from '@testing-library/react';
import type { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';

import { ThemeProvider } from 'app/providers/ThemeProvider';

interface ComponentRenderOptions {
    route?: string;
}

export const ComponentRender = (component: ReactNode, options: ComponentRenderOptions = {}) => {
    const { route = '/' } = options;
    return render(
        <MemoryRouter initialEntries={[route]}>
            <ThemeProvider>{component}</ThemeProvider>
        </MemoryRouter>
    );
};
