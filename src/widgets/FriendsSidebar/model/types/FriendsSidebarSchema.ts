import type { FriendStatus } from 'shared/types/FriendStatus';

export interface FriendsSidebarSchema {
    title: string;
    count: number;
    value: FriendStatus;
}
