import type { User } from 'entities/User';

export interface RegistrationSchema {
    email: string;
    successEmail: string | undefined;
    confirmCode?: string;
    isConfirmed?: boolean;
    firstName?: string;
    lastName?: string;
    password?: string;
    isLoading: boolean;
    error?: string;
}

export interface ConfirmEmailData {
    email: string;
}

export interface RegistrationData {
    user: User;
    accessToken: string;
}
