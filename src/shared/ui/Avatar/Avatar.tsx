import clsx from 'clsx';
import { memo } from 'react';

import { getOnlineStatus } from 'shared/lib/getters/getOnlineStatus/getOnlineStatus';
import type { AvatarVariant } from 'shared/types/AvatarVariant';

import { Typography } from '../Typography/Typography';

import cls from './Avatar.module.scss';

type AvatarSize = 'extraSmall' | 'small' | 'medium' | 'large';

interface AvatarProps {
    className?: string;
    firstName: string;
    lastName: string;
    avatar: AvatarVariant;
    size: AvatarSize;
    lastSeen: string;
    onClick?: () => void;
}

export const Avatar = memo(function Avatar({
    className,
    firstName,
    lastName,
    avatar,
    size,
    lastSeen,
    onClick,
}: AvatarProps) {
    const { online } = getOnlineStatus(lastSeen);

    return (
        <div
            className={clsx(cls.avatar, cls[avatar], cls[size], className)}
            onClick={onClick}
        >
            <Typography
                className={cls.text}
                tag='p'
            >
                {firstName[0].toUpperCase()}
                {lastName[0].toUpperCase()}
            </Typography>
            {online && <div className={clsx(cls.online, cls[size])} />}
        </div>
    );
});
