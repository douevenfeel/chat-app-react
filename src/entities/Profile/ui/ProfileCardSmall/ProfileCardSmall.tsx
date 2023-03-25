import { memo } from 'react';

import { useOnlineStatus } from 'shared/lib/hooks/useOnlineStatus/useOnlineStatus';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';

import type { Profile } from '../../model/types/ProfileSchema';

import cls from './ProfileCardSmall.module.scss';

interface ProfileCardSmallProps {
    data?: Profile;
    onClick?: () => void;
}

export const ProfileCardSmall = memo(function ProfileCardSmall({ data, onClick }: ProfileCardSmallProps) {
    const { online } = useOnlineStatus(Boolean(data?.onlineInfo.isOnline), data?.onlineInfo.lastSeen);

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
                    <Text
                        size='small'
                        tag='p'
                        variant='primary'
                    >
                        {data.firstName}
                    </Text>
                </>
            )}
        </div>
    );
});
