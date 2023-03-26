import type { FriendStatus } from 'shared/types/FriendStatus';

export interface AddFriendSchema {
    id?: number;
    friendStatus: FriendStatus;
}
