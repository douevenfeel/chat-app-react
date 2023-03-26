import type { FriendStatus } from 'shared/types/FriendStatus';

export interface CancelFriendRequestSchema {
    id?: number;
    friendStatus: FriendStatus;
}
