import type { FriendStatus } from 'shared/types/FriendStatus';
import type { User } from 'shared/types/User';

export interface OnlineInfo {
    isOnline: boolean;
    lastSeen: string;
}

export interface FriendsData {
    friends: User[];
    counts: Counts;
}

export interface Counts {
    friends?: number;
    onlineFriends?: number;
    outcomingRequests?: number;
    incomingRequests?: number;
}

export type FriendsSection = 'all' | 'online';

export interface FriendsSchema {
    data?: User[];
    counts?: Counts;
    search: string;
    friendStatus?: FriendStatus;
    section: FriendsSection;
    isLoading: boolean;
    error?: string;
}

export interface UpdateFriendStatus {
    id: number;
    friendStatus: FriendStatus;
}
