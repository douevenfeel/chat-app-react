import type { Message } from 'shared/types/Message';
import type { User } from 'shared/types/User';

export interface Chat {
    user: User;
    message: Message;
}

export interface ChatsSchema {
    data?: Chat[];
    isLoading: boolean;
    error?: string;
}
