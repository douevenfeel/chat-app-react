import type { MessageCardVariant } from 'entities/Chat/ui/MessageCard/MessageCard';
import type { Message } from 'shared/types/Message';

export const getMessageVariant = (
    prevMessage: Message,
    curMessage: Message,
    nextMessage: Message
): MessageCardVariant => {
    const prevMessageUserId = prevMessage?.user?.id;
    const curMessageUserId = curMessage?.user?.id;
    const nextMessageUserId = nextMessage?.user?.id;
    if (!prevMessageUserId && !nextMessageUserId) {
        return 'single';
    }
    if (!curMessageUserId) {
        return 'last';
    }
    if (curMessageUserId === prevMessageUserId && curMessageUserId === nextMessageUserId) {
        return 'between';
    }
    if (curMessageUserId !== prevMessageUserId && curMessageUserId !== nextMessageUserId) {
        return 'single';
    }
    if (curMessageUserId !== prevMessageUserId) {
        return 'first';
    }
    if (curMessageUserId === prevMessageUserId && curMessageUserId !== nextMessageUserId) {
        return 'last';
    }

    return 'last';
};
