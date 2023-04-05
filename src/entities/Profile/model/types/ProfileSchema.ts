import type { AvatarVariant } from 'shared/types/AvatarVariant';
import type { FriendStatus } from 'shared/types/FriendStatus';

export interface OnlineInfo {
    isOnline: boolean;
    lastSeen: string;
}

export interface Profile {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    avatar: AvatarVariant;
    friendStatus: FriendStatus | undefined;
    onlineInfo: OnlineInfo;
}

export interface UpdateProfileInfo {
    firstName: string;
    lastName: string;
}

export interface ProfileSchema {
    data?: Profile;
    updateInfoForm: UpdateProfileInfo;
    isLoading: boolean;
    isUpdatingInfo: boolean;
    error?: string;
}
