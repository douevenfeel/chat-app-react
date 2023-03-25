import clsx from 'clsx';
import { memo } from 'react';

import type { AvatarVariant } from 'shared/types/AvatarVariant';

import { Text } from '../Text/Text';

import cls from './Avatar.module.scss';

type AvatarSize = 'small' | 'medium' | 'large';

interface AvatarProps {
    className?: string;
    firstName: string;
    lastName: string;
    avatar: AvatarVariant;
    size: AvatarSize;
    isOnline?: boolean;
}

export const Avatar = memo(function Avatar({ className, firstName, lastName, avatar, size, isOnline }: AvatarProps) {
    return (
        <div className={clsx(cls.avatar, cls[avatar], cls[size], className)}>
            <Text
                align='center'
                className={cls.text}
                size='medium'
                tag='p'
            >
                {`${firstName[0].toUpperCase()}${lastName[0].toUpperCase()}`}
            </Text>
            {isOnline && <div className={clsx(cls.online, cls[size])} />}
        </div>
    );
});
