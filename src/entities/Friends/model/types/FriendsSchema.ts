import type { Profile } from 'entities/Profile';
import type { FriendStatus } from 'shared/types/FriendStatus';

export interface OnlineInfo {
    isOnline: boolean;
    lastSeen: string;
}

export interface FriendsData {
    friends: Profile[];
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
    data?: Profile[];
    counts?: Counts;
    search: string;
    friendStatus: FriendStatus;
    section: FriendsSection;
    isLoading: boolean;
    error?: string;
}
