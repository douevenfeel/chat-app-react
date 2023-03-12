import type { RouteProps } from 'react-router-dom';

import { LoginPage } from 'pages/LoginPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { RegistrationPage } from 'pages/RegistrationPage';
import { getRouteLogin, getRouteRegistration } from 'shared/const/router';

export const routeConfig: RouteProps[] = [
    { path: getRouteLogin(), element: <LoginPage /> },
    { path: getRouteRegistration(), element: <RegistrationPage /> },
    { path: '*', element: <NotFoundPage /> },
];
