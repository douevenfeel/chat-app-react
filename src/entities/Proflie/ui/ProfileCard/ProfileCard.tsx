import clsx from 'clsx';
import type { ReactNode } from 'react';
import { memo } from 'react';

import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';

import type { Profile } from '../../model/types/ProfileSchema';

import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    data?: Profile;
    buttons?: ReactNode[];
}

export const ProfileCard = memo(function ProfileCard({ data, buttons }: ProfileCardProps) {
    return (
        <div className={clsx(cls.profileCard)}>
            {data && (
                <Avatar
                    avatar={data.avatar}
                    firstName={data.firstName}
                    lastName={data.lastName}
                    size='medium'
                />
            )}
            {data && (
                <Text
                    size='medium'
                    tag='h3'
                    variant='primary'
                >
                    {`${data.firstName} ${data.lastName}`}
                </Text>
            )}
            {data && buttons && <div className={cls.buttons}>{buttons.map((button) => button)}</div>}
        </div>
    );
});
