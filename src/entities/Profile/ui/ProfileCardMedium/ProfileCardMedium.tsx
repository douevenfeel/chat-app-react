import type { ReactNode } from 'react';
import { memo } from 'react';

import { getRouteProfile } from 'shared/const/router';
import { useOnlineStatus } from 'shared/lib/hooks/useOnlineStatus/useOnlineStatus';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';

import type { Profile } from '../../model/types/ProfileSchema';

import cls from './ProfileCardMedium.module.scss';

interface ProfileCardMediumProps {
    data?: Profile;
    options?: ReactNode[];
}

export const ProfileCardMedium = memo(function ProfileCardMedium({ data, options }: ProfileCardMediumProps) {
    const { online } = useOnlineStatus(Boolean(data?.onlineInfo.isOnline), data?.onlineInfo.lastSeen);

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
                            <Text
                                size='medium'
                                tag='h3'
                                variant='primary'
                                weight='medium'
                            >
                                {`${data.firstName} ${data.lastName}`}
                            </Text>
                        </AppLink>
                        <div className={cls.buttons}>{options?.map((option) => option)}</div>
                    </div>
                </>
            )}
        </div>
    );
});
