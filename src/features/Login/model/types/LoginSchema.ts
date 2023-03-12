import type { User } from 'entities/User';

export interface LoginSchema {
    email: string;
    password: string;
    isLoading: boolean;
    error?: string;
}

export interface LoginData {
    user: User;
    accessToken: string;
}
