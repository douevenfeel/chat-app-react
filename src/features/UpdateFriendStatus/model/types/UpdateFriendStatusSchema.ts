import type { FriendStatus } from 'shared/types/FriendStatus';

export interface UpdateFriendStatusData {
    id: number;
    location: 'profile' | 'friends';
}

export interface UpdateFriendStatusSchema {
    id: number;
    friendStatus: FriendStatus;
}
