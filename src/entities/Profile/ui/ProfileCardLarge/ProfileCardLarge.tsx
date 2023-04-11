import type { ReactNode } from 'react';
import { memo } from 'react';

import { useOnlineStatus } from 'shared/lib/hooks/useOnlineStatus/useOnlineStatus';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Typography } from 'shared/ui/Typography/Typography';

import type { Profile } from '../../model/types/ProfileSchema';

import cls from './ProfileCardLarge.module.scss';

interface ProfileCardLargeProps {
    data: Profile;
    options: ReactNode[];
}

export const ProfileCardLarge = memo(function ProfileCardLarge({ data, options }: ProfileCardLargeProps) {
    const { online, lastSeen } = useOnlineStatus(data?.lastSeen);

    return (
        <div className={cls.profileCardLarge}>
            {data && (
                <>
                    <Avatar
                        avatar={data.avatar}
                        firstName={data.firstName}
                        lastName={data.lastName}
                        online={online}
                        size='large'
                    />
                    <Typography
                        size='medium'
                        tag='h3'
                        variant='primary'
                        weight='semi'
                    >
                        {`${data.firstName} ${data.lastName}`}
                    </Typography>
                    {lastSeen && (
                        <Typography
                            size='small'
                            tag='p'
                            variant='secondary'
                            weight='normal'
                        >
                            {lastSeen}
                        </Typography>
                    )}
                    <div className={cls.buttons}>{options?.map((option) => option)}</div>
                </>
            )}
        </div>
    );
});
