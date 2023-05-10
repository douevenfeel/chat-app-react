import { memo } from 'react';

import { DateSeparator, MessageCard } from 'entities/Chat';
import type { Message } from 'shared/types/Message';

import { getDateSeparator } from '../../utils/getDateSeparator/getDateSeparator';
import { getMessageVariant } from '../../utils/getMessageVariant/getMessageVariant';

interface MessageItemProps {
    message: Message;
    prevMessage: Message;
    nextMessage: Message;
}

export const MessageItem = memo(function MessageItem({ prevMessage, message, nextMessage }: MessageItemProps) {
    const variant = getMessageVariant(prevMessage, message, nextMessage);
    const dateSeparator = getDateSeparator(message, nextMessage);

    return (
        <>
            <MessageCard
                {...message}
                variant={variant}
            />
            {dateSeparator && <DateSeparator createdAt={nextMessage?.createdAt} />}
        </>
    );
});
