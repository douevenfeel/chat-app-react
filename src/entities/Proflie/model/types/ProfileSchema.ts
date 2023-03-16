import type { AvatarVariant } from 'shared/types/AvatarVariant';
import type { FriendStatus } from 'shared/types/FriendStatus';

export interface Profile {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    avatar: AvatarVariant;
    friendStatus?: FriendStatus;
}

export interface ProfileSchema {
    data?: Profile;
    isLoading: boolean;
    error?: string;
}
