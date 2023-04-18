import type { ReactNode } from 'react';
import { memo } from 'react';

import { getRouteProfile } from 'shared/const/router';
import { useOnlineStatus } from 'shared/lib/hooks/useOnlineStatus/useOnlineStatus';
import type { User } from 'shared/types/User';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Typography } from 'shared/ui/Typography/Typography';

import cls from './ProfileCardMedium.module.scss';

interface ProfileCardMediumProps {
    data?: User;
    options?: ReactNode[];
}

export const ProfileCardMedium = memo(function ProfileCardMedium({ data, options }: ProfileCardMediumProps) {
    const { online } = useOnlineStatus(data?.lastSeen);

    return (
        <div className={cls.profileCardMedium}>
            {data && (
                <>
                    <Avatar
                        avatar={data.avatar}
                        firstName={data.firstName}
                        lastName={data.lastName}
                        online={online}
                        size='medium'
                    />
                    <div className={cls.profile}>
                        <AppLink to={getRouteProfile(String(data.id))}>
                            <Typography
                                size='medium'
                                tag='h3'
                                variant='primary'
                                weight='medium'
                            >
                                {`${data.firstName} ${data.lastName}`}
                            </Typography>
                        </AppLink>
                        <div className={cls.buttons}>{options?.map((option) => option)}</div>
                    </div>
                </>
            )}
        </div>
    );
});
