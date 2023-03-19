import type { ReactNode } from 'react';
import { memo } from 'react';

import { getRouteProfile } from 'shared/const/router';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';

import type { Profile } from '../../model/types/ProfileSchema';

import cls from './ProfileCardMedium.module.scss';

interface ProfileCardMediumProps {
    data?: Profile;
    buttons?: ReactNode[];
}

export const ProfileCardMedium = memo(function ProfileCardMedium({ data, buttons }: ProfileCardMediumProps) {
    return (
        <div className={cls.profileCardMedium}>
            {data && (
                <>
                    <Avatar
                        avatar={data.avatar}
                        firstName={data.firstName}
                        lastName={data.lastName}
                        size='medium'
                    />
                    <div className={cls.profile}>
                        <AppLink to={getRouteProfile(String(data.id))}>
                            <Text
                                size='medium'
                                tag='h3'
                                variant='primary'
                            >
                                {`${data.firstName} ${data.lastName}`}
                            </Text>
                        </AppLink>
                        {buttons && <div className={cls.buttons}>{buttons.map((button) => button)}</div>}
                    </div>
                </>
            )}
        </div>
    );
});
