import { memo } from 'react';

import { useOnlineStatus } from 'shared/lib/hooks/useOnlineStatus/useOnlineStatus';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Typography } from 'shared/ui/Typography/Typography';

import type { Profile } from '../../model/types/ProfileSchema';

import cls from './ProfileCardSmall.module.scss';

interface ProfileCardSmallProps {
    data?: Profile;
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
