import { Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';

import { PageLoader } from 'widgets/PageLoader';

import { routeConfig } from '../config/routeConfig';
import type { AppRoute } from '../model/types/AppRoute';

import { RequireAuth } from './RequireAuth';

export const AppRouter = () => {
    const renderWithWrapper = useCallback((route: AppRoute) => {
        const element = <Suspense fallback={<PageLoader />}>{route.element}</Suspense>;

        return (
            <Route
                element={route.auth !== undefined ? <RequireAuth require={route.auth}>{element}</RequireAuth> : element}
                key={route.path}
                path={route.path}
            />
        );
    }, []);

    return <Routes>{routeConfig.map(renderWithWrapper)}</Routes>;
};
