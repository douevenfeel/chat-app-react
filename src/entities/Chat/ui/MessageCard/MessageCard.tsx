import clsx from 'clsx';
import dayjs from 'dayjs';
import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { getRouteProfile } from 'shared/const/router';
import type { Message } from 'shared/types/Message';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Typography } from 'shared/ui/Typography/Typography';

import cls from './MessageCard.module.scss';

export type MessageCardVariant = 'first' | 'between' | 'last' | 'single';

interface MessageCardProps extends Message {
    variant: MessageCardVariant;
}

export const MessageCard = memo(function MessageCard({ text, variant, user, createdAt }: MessageCardProps) {
    const navigate = useNavigate();
    const dateCollapsed = dayjs(createdAt).format('HH:mm');
    const date = dayjs(createdAt).format('D MMMM YYYY HH:mm:ss');
    const onAvatarClick = useCallback(() => {
        navigate(getRouteProfile(String(user.id)));
    }, [navigate, user.id]);

    return (
        <div className={cls.messageCard}>
            {['last', 'single'].includes(variant) && (
                <div className={cls.avatarContainer}>
                    <Avatar
                        className={cls.avatar}
                        size='extraSmall'
                        {...user}
                        onClick={onAvatarClick}
                    />
                    <div className={cls.cornerContainer}>
                        <div className={cls.corner} />
                    </div>
                </div>
            )}
            <div className={clsx(cls.message, cls[variant])}>
                <Typography
                    className={clsx(!['first', 'single'].includes(variant) && cls.nameHidden, cls[user.avatar])}
                    size='small'
                    tag='p'
                    variant='primary'
                    weight='medium'
                >
                    {user.firstName} {user.lastName}
                </Typography>
                <Typography
                    className={cls.text}
                    size='small'
                    tag='pre'
                    variant='primary'
                    weight='normal'
                >
                    {text}
                </Typography>
            </div>
            <Typography
                align='right'
                className={cls.createdAt}
                size='extraSmall'
                tag='p'
                title={date}
                variant='secondary'
                weight='normal'
            >
                {dateCollapsed}
            </Typography>
        </div>
    );
});
