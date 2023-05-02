import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { getRouteProfile } from 'shared/const/router';
import { useOnlineStatus } from 'shared/lib/hooks/useOnlineStatus/useOnlineStatus';
import type { User } from 'shared/types/User';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Typography } from 'shared/ui/Typography/Typography';

import cls from './NavigateToProfile.module.scss';

type NavigateToProfileProps = User;

export const NavigateToProfile = memo(function NavigateToProfile(props: NavigateToProfileProps) {
    const { online } = useOnlineStatus(props.lastSeen);
    const navigate = useNavigate();
    const onProfileClick = useCallback(() => {
        navigate(getRouteProfile(String(props.id)));
    }, [navigate, props.id]);

    return (
        <div
            className={cls.navigateToProfile}
            onClick={onProfileClick}
        >
            <Avatar
                avatar={props.avatar}
                firstName={props.firstName}
                key={props.id}
                lastName={props.lastName}
                online={online}
                size='extraSmall'
            />
            <div>
                <Typography
                    size='extraSmall'
                    tag='h3'
                    variant='primary'
                    weight='normal'
                >
                    {props.firstName} {props.lastName}
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
