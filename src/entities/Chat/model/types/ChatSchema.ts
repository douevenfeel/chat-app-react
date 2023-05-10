import type { Message } from 'shared/types/Message';
import type { User } from 'shared/types/User';

export interface Chat {
    id: number;
    messages: Message[];
    user: User;
}

export interface ChatSchema {
    data?: Chat;
    message: string;
    isLoading: boolean;
    error?: string;
}

export interface NewMessage {
    text: string;
}
