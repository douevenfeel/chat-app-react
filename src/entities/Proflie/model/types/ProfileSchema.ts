import type { AvatarVariant } from 'shared/types/AvatarVariant';

export interface Profile {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    avatar: AvatarVariant;
}

export interface ProfileSchema {
    data?: Profile;
    isLoading: boolean;
    error?: string;
}
