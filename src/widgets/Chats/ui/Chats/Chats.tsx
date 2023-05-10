import clsx from 'clsx';
import { memo, useMemo } from 'react';
import { useSelector } from 'react-redux';

import { Typography } from 'shared/ui/Typography/Typography';

import { getChatsData } from '../../model/selectors/getChatsData/getChatsData';
import { getChatsIsLoading } from '../../model/selectors/getChatsIsLoading/getChatsIsLoading';
import { ChatItem } from '../ChatItem/ChatItem';

import cls from './Chats.module.scss';

interface ChatsProps {
    className?: string;
}

export const Chats = memo(function Chats({ className }: ChatsProps) {
    const data = useSelector(getChatsData);
    const isLoading = useSelector(getChatsIsLoading);
    const itemsList = useMemo(
        () =>
            data?.map((chat) => (
                <ChatItem
                    {...chat}
                    key={chat.user?.id}
                />
            )),
        [data]
    );
    if (!data?.length && !isLoading) {
        return (
            <Typography
                className={cls.empty}
                size='medium'
                tag='p'
                variant='primary'
            >
                Начните общение
            </Typography>
        );
    }

    return <div className={clsx(cls.chats, !data?.length && cls.empty, className)}>{itemsList}</div>;
});
