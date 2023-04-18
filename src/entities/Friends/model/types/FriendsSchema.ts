import type { FriendStatus } from 'shared/types/FriendStatus';
import type { User } from 'shared/types/User';

export interface OnlineInfo {
    isOnline: boolean;
    lastSeen: string;
}

export interface FriendsData {
    friends: User[];
    counts: Counts;
    profile: User;
}

export interface Counts {
    friends?: number;
    onlineFriends?: number;
    outcomingRequests?: number;
    incomingRequests?: number;
}

export type FriendsSection = 'all' | 'online';

export type FriendsFriendStatus = Exclude<FriendStatus, 'possibleFriend'>;

export interface FriendsSchema {
    data?: User[];
    counts?: Counts;
    profile?: User;
    search: string;
    friendStatus?: FriendsFriendStatus;
    section: FriendsSection;
    isLoading: boolean;
    error?: string;
}

export interface UpdateFriendStatus {
    id: number;
    friendStatus: FriendStatus;
}
