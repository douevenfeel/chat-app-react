import type { ReactNode } from 'react';
import { memo } from 'react';

import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';

import type { Profile } from '../../model/types/ProfileSchema';

import cls from './ProfileCardLarge.module.scss';

interface ProfileCardLargeProps {
    data?: Profile;
    buttons?: ReactNode[];
}

export const ProfileCardLarge = memo(function ProfileCardLarge({ data, buttons }: ProfileCardLargeProps) {
    return (
        <div className={cls.profileCardLarge}>
            {data && (
                <>
                    <Avatar
                        avatar={data.avatar}
                        firstName={data.firstName}
                        lastName={data.lastName}
                        size='large'
                    />
                    <Text
                        size='medium'
                        tag='h3'
                        variant='primary'
                    >
                        {`${data.firstName} ${data.lastName}`}
                    </Text>
                    {buttons && <div className={cls.buttons}>{buttons.map((button) => button)}</div>}
                </>
            )}
        </div>
    );
});
