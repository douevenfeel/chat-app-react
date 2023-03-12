import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { PageLoader } from 'widgets/PageLoader';

import { routeConfig } from '../config/routeConfig';

export const AppRouter = () => (
    <Suspense fallback={<PageLoader />}>
        <Routes>
            {routeConfig.map(({ path, element }) => (
                <Route
                    element={element}
                    key={path}
                    path={path}
                />
            ))}
        </Routes>
    </Suspense>
);
