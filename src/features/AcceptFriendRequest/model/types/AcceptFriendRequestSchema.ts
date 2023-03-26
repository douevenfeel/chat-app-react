import type { FriendStatus } from 'shared/types/FriendStatus';

export interface AcceptFriendRequestSchema {
    id?: number;
    friendStatus: FriendStatus;
}
