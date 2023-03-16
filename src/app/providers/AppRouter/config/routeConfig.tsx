import type { RouteProps } from 'react-router-dom';

import { ConversationPage } from 'pages/ConversationPage';
import { EditProfilePage } from 'pages/EditProfilePage';
import { LoginPage } from 'pages/LoginPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePage } from 'pages/ProfilePage';
import { RegistrationPage } from 'pages/RegistrationPage';
import {
    getRouteConversation,
    getRouteEditProfile,
    getRouteLogin,
    getRouteProfile,
    getRouteRegistration,
} from 'shared/const/router';

export const routeConfig: RouteProps[] = [
    { path: getRouteLogin(), element: <LoginPage /> },
    { path: getRouteRegistration(), element: <RegistrationPage /> },
    { path: getRouteProfile(':id'), element: <ProfilePage /> },
    { path: getRouteEditProfile(), element: <EditProfilePage /> },
    { path: getRouteConversation(':id'), element: <ConversationPage /> },
    { path: '*', element: <NotFoundPage /> },
];
