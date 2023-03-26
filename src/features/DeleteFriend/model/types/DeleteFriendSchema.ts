import type { FriendStatus } from 'shared/types/FriendStatus';

export interface DeleteFriendSchema {
    id?: number;
    friendStatus: FriendStatus;
}
