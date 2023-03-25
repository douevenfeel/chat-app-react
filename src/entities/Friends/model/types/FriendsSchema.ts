import type { AvatarVariant } from 'shared/types/AvatarVariant';

export interface OnlineInfo {
    isOnline: boolean;
    lastSeen: string;
}

export interface Friend {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    avatar: AvatarVariant;
    onlineInfo: OnlineInfo;
}

export interface FriendsSchema {
    data?: Friend[];
    isLoading: boolean;
    error?: string;
}
