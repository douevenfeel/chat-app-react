import { memo } from 'react';

import { useOnlineStatus } from 'shared/lib/hooks/useOnlineStatus/useOnlineStatus';
import type { User } from 'shared/types/User';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Typography } from 'shared/ui/Typography/Typography';

import cls from './ProfileCardSmall.module.scss';

interface ProfileCardSmallProps {
    data?: User;
    onClick?: () => void;
}

export const ProfileCardSmall = memo(function ProfileCardSmall({ data, onClick }: ProfileCardSmallProps) {
    const { online } = useOnlineStatus(data?.lastSeen);

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
                        online={online}
                        size='small'
                    />
                    <Typography
                        size='small'
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
