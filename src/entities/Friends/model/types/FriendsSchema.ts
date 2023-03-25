import type { AvatarVariant } from 'shared/types/AvatarVariant';

export interface Friend {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    avatar: AvatarVariant;
}

export interface FriendsSchema {
    data?: Friend[];
    isLoading: boolean;
    error?: string;
}
