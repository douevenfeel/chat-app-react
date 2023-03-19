import { ConversationPage } from 'pages/ConversationPage';
import { EditProfilePage } from 'pages/EditProfilePage';
import { LoginPage } from 'pages/LoginPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePage } from 'pages/ProfilePage';
import { RegistrationPage } from 'pages/RegistrationPage';
import {
    getRouteConversation,
    getRouteConversations,
    getRouteEditProfile,
    getRouteLogin,
    getRouteProfile,
    getRouteRegistration,
} from 'shared/const/router';

import type { AppRoute } from '../model/types/AppRoute';

export const routeConfig: AppRoute[] = [
    { path: getRouteLogin(), element: <LoginPage />, auth: false },
    { path: getRouteRegistration(), element: <RegistrationPage />, auth: false },
    { path: getRouteProfile(':id'), element: <ProfilePage />, auth: true },
    { path: getRouteEditProfile(), element: <EditProfilePage />, auth: true },
    { path: getRouteConversations(), element: <ConversationPage />, auth: true },
    { path: getRouteConversation(':id'), element: <ConversationPage />, auth: true },
    { path: '*', element: <NotFoundPage /> },
];
