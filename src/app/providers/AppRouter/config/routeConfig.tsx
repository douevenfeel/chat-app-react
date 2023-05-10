import { ChatPage } from 'pages/ChatPage';
import { ChatsPage } from 'pages/ChatsPage';
import { FriendsPage } from 'pages/FriendsPage';
import { LoginPage } from 'pages/LoginPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePage } from 'pages/ProfilePage';
import { RegistrationPage } from 'pages/RegistrationPage';
import { SearchPage } from 'pages/SearchPage';
import {
    getRouteChat,
    getRouteChats,
    getRouteFriends,
    getRouteLogin,
    getRouteProfile,
    getRouteRegistration,
    getRouteSearch,
} from 'shared/const/router';

import type { AppRoute } from '../model/types/AppRoute';

export const routeConfig: AppRoute[] = [
    { path: getRouteLogin(), element: <LoginPage />, auth: false },
    { path: getRouteRegistration(), element: <RegistrationPage />, auth: false },
    { path: getRouteProfile(':id'), element: <ProfilePage />, auth: true },
    { path: getRouteFriends(':id'), element: <FriendsPage />, auth: true },
    { path: getRouteChats(), element: <ChatsPage />, auth: true },
    { path: getRouteChat(':id'), element: <ChatPage />, auth: true },
    { path: getRouteSearch(), element: <SearchPage />, auth: true },
    { path: '*', element: <NotFoundPage /> },
];
