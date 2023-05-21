import dayjs from 'dayjs';
import { memo } from 'react';

import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Typography } from 'shared/ui/Typography/Typography';

import type { Chat } from '../../model/types/ChatsSchema';

import cls from './ChatCard.module.scss';

interface ChatCardProps extends Chat {
    onClick: () => void;
}

export const ChatCard = memo(function ChatCard({ user, onClick, message }: ChatCardProps) {
    const date = dayjs(new Date(+message.createdAt)).format('HH:mm');

    return (
        <div
            className={cls.chatCard}
            onClick={onClick}
        >
            <Avatar
                avatar={user.avatar}
                firstName={user.firstName}
                lastName={user.lastName}
                lastSeen={user.lastSeen}
                size='small'
            />
            <div className={cls.container}>
                <div className={cls.userContainer}>
                    <Typography
                        size='medium'
                        tag='p'
                        variant='primary'
                    >
                        {user.firstName} {user.lastName}
                    </Typography>
                    <Typography
                        className={cls.message}
                        size='medium'
                        tag='p'
                        variant='secondary'
                    >
                        {date}
                    </Typography>
                </div>
                <Typography
                    className={cls.message}
                    size='medium'
                    tag='p'
                    variant='secondary'
                >
                    {message.text}
                </Typography>
            </div>
        </div>
    );
});
