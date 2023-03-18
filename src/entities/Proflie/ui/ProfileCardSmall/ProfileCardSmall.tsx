import { memo } from 'react';

import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';

import type { Profile } from '../../model/types/ProfileSchema';

import cls from './ProfileCardSmall.module.scss';

interface ProfileCardSmallProps {
    data?: Profile;
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
