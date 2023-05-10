import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import 'app/styles/index.scss';
import { App } from 'app/App';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { StoreProvider } from 'app/providers/StoreProvider';
import { ThemeProvider } from 'app/providers/ThemeProvider';

const container = document.getElementById('root');

if (!container) {
    throw new Error();
}

const root = createRoot(container);
root.render(
    <BrowserRouter>
        <StoreProvider>
            <ThemeProvider>
                <ErrorBoundary>
                    <App />
                </ErrorBoundary>
            </ThemeProvider>
        </StoreProvider>
    </BrowserRouter>
);
