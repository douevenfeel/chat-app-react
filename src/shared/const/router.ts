export type AppRoutes = 'login' | 'registration';

export const getRouteLogin = () => '/login';
export const getRouteRegistration = () => '/registration';
export const getRouteProfile = (id: string) => `/profile/${id}`;
