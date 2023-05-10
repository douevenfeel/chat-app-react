import { memo } from 'react';

import type { User } from 'shared/types/User';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Typography } from 'shared/ui/Typography/Typography';

import cls from './ProfileCardSmall.module.scss';

interface ProfileCardSmallProps {
    data?: User;
    onClick?: () => void;
}

export const ProfileCardSmall = memo(function ProfileCardSmall({ data, onClick }: ProfileCardSmallProps) {
    return (
        <div
            className={cls.profileCardSmall}
            onClick={onClick}
        >
            {data && (
                <>
                    <Avatar
                        avatar={data.avatar}
                        firstName={data.firstName}
                        lastName={data.lastName}
                        lastSeen={data.lastSeen}
                        size='small'
                    />
                    <Typography
                        size='extraSmall'
                        tag='p'
                        variant='primary'
                        weight='normal'
                    >
                        {data.firstName}
                    </Typography>
                </>
            )}
        </div>
    );
});
