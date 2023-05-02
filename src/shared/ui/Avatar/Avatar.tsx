import clsx from 'clsx';
import { memo } from 'react';

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
    online: boolean;
}

export const Avatar = memo(function Avatar({ className, firstName, lastName, avatar, size, online }: AvatarProps) {
    return (
        <div className={clsx(cls.avatar, cls[avatar], cls[size], className)}>
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
