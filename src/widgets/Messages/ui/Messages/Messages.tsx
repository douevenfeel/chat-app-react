import clsx from 'clsx';
import { useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';

import { getChatDataMessages } from '../../model/selectors/getChatDataMessages/getChatDataMessages';
import { MessageItem } from '../MessageItem/MessageItem';

import cls from './Messages.module.scss';

interface MessagesProps {
    className?: string;
}

export const Messages = ({ className }: MessagesProps) => {
    const messages = useSelector(getChatDataMessages);
    const itemsList = useMemo(
        () =>
            messages &&
            messages.map((message, index, array) => (
                <MessageItem
                    key={message.id}
                    message={message}
                    nextMessage={array[index + 1]}
                    prevMessage={array[index - 1]}
                />
            )),
        [messages]
    );
    useEffect(() => {
        window.scrollTo({ top: document.body.scrollHeight });
    }, [messages]);

    return <div className={clsx(cls.messages, className)}>{itemsList}</div>;
};
