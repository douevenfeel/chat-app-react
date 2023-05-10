import type { ReactNode } from 'react';
import { useMemo, memo } from 'react';

import { getOnlineStatus } from 'shared/lib/getters/getOnlineStatus/getOnlineStatus';
import type { User } from 'shared/types/User';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Typography } from 'shared/ui/Typography/Typography';

import cls from './ProfileCardLarge.module.scss';

interface ProfileCardLargeProps {
    data: User;
    options: ReactNode[];
}

export const ProfileCardLarge = memo(function ProfileCardLarge({ data, options }: ProfileCardLargeProps) {
    const { lastSeenTime } = getOnlineStatus(data?.lastSeen);
    const optionsList = useMemo(() => options.map((option) => option), [options]);

    return (
        <div className={cls.profileCardLarge}>
            {data && (
                <>
                    <Avatar
                        avatar={data.avatar}
                        firstName={data.firstName}
                        lastName={data.lastName}
                        lastSeen={data.lastSeen}
                        size='large'
                    />
                    <Typography
                        size='medium'
                        tag='h3'
                        variant='primary'
                        weight='semi'
                    >
                        {data.firstName} {data.lastName}
                    </Typography>
                    <Typography
                        size='small'
                        tag='p'
                        variant='secondary'
                        weight='normal'
                    >
                        {lastSeenTime ? lastSeenTime : 'в сети'}
                    </Typography>
                    <div className={cls.buttons}>{optionsList}</div>
                </>
            )}
        </div>
    );
});
