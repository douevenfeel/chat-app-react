import type { Message } from 'shared/types/Message';
import type { User } from 'shared/types/User';

export interface Chat {
    id: number;
    user: User;
    message: Message;
}

export interface ChatsSchema {
    data?: Chat[];
    isLoading: boolean;
    error?: string;
}
