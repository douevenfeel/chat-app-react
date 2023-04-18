import type { AvatarVariant } from './AvatarVariant';
import type { FriendStatus } from './FriendStatus';

export interface User {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    avatar: AvatarVariant;
    lastSeen: string;
    friendStatus?: FriendStatus;
}
