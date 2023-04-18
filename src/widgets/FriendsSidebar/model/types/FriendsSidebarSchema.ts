import type { FriendsFriendStatus } from 'entities/Friends';

export interface FriendsSidebarSchema {
    title: string;
    count: number;
    value: FriendsFriendStatus;
}
