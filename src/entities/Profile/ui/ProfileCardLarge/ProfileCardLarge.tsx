import type { ReactNode } from 'react';
import { memo } from 'react';

import { useOnlineStatus } from 'shared/lib/hooks/useOnlineStatus/useOnlineStatus';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';

import type { Profile } from '../../model/types/ProfileSchema';

import cls from './ProfileCardLarge.module.scss';

interface ProfileCardLargeProps {
    data: Profile;
    options: ReactNode[];
}

export const ProfileCardLarge = memo(function ProfileCardLarge({ data, options }: ProfileCardLargeProps) {
    const { online, lastSeen } = useOnlineStatus(data?.onlineInfo.isOnline, data?.onlineInfo.lastSeen);

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
                    <Text
                        size='medium'
                        tag='h3'
                        variant='primary'
                        weight='semi'
                    >
                        {`${data.firstName} ${data.lastName}`}
                    </Text>
                    {lastSeen && (
                        <Text
                            size='small'
                            tag='p'
                            variant='secondary'
                            weight='normal'
                        >
                            {lastSeen}
                        </Text>
                    )}
                    <div className={cls.buttons}>{options?.map((option) => option)}</div>
                </>
            )}
        </div>
    );
});
