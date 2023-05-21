import type { User } from './User';

export interface Message {
    id: number;
    text: string;
    user: User;
    createdAt: string;
}
