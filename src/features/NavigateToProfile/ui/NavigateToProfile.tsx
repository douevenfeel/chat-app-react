import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { getRouteProfile } from 'shared/const/router';
import type { User } from 'shared/types/User';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Typography } from 'shared/ui/Typography/Typography';

import cls from './NavigateToProfile.module.scss';

type NavigateToProfileProps = User;

export const NavigateToProfile = memo(function NavigateToProfile({
    avatar,
    firstName,
    id,
    lastName,
    lastSeen,
}: NavigateToProfileProps) {
    const navigate = useNavigate();
    const onProfileClick = useCallback(() => {
        navigate(getRouteProfile(String(id)));
    }, [navigate, id]);

    return (
        <div
            className={cls.navigateToProfile}
            onClick={onProfileClick}
        >
            <Avatar
                avatar={avatar}
                firstName={firstName}
                key={id}
                lastName={lastName}
                lastSeen={lastSeen}
                size='extraSmall'
            />
            <div>
                <Typography
                    size='extraSmall'
                    tag='h3'
                    variant='primary'
                    weight='normal'
                >
                    {firstName} {lastName}
                </Typography>
                <Typography
                    size='extraSmall'
                    tag='p'
                    variant='secondary'
                    weight='normal'
                >
                    перейти к странице
                </Typography>
            </div>
        </div>
    );
});
