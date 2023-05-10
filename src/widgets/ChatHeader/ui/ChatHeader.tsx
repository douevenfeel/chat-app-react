import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import BackIcon from 'shared/assets/icons/back.svg';
import { getRouteChats, getRouteProfile } from 'shared/const/router';
import { getOnlineStatus } from 'shared/lib/getters/getOnlineStatus/getOnlineStatus';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button } from 'shared/ui/Button/Button';
import { Typography } from 'shared/ui/Typography/Typography';

import { getChatDataUser } from '../model/selectors/getChatDataUser/getChatDataUser';

import cls from './ChatHeader.module.scss';

export const ChatHeader = () => {
    const user = useSelector(getChatDataUser);
    const { lastSeenTime } = getOnlineStatus(user?.lastSeen);
    const navigate = useNavigate();
    const onBackClick = useCallback(() => {
        navigate(getRouteChats());
    }, [navigate]);
    const onProfileClick = useCallback(() => {
        navigate(getRouteProfile(String(user?.id)));
    }, [navigate, user?.id]);

    return (
        <div className={cls.chatHeader}>
            <Button
                className={cls.button}
                size='small'
                variant='clean'
                onClick={onBackClick}
            >
                <BackIcon />
                <Typography
                    className={cls.buttonText}
                    size='small'
                    tag='p'
                    variant='primary'
                >
                    Назад
                </Typography>
            </Button>
            <div>
                <AppLink to={getRouteProfile(String(user?.id))}>
                    <Typography
                        align='center'
                        size='medium'
                        tag='h1'
                        variant='primary'
                        weight='medium'
                    >
                        {user?.firstName} {user?.lastName}
                    </Typography>
                </AppLink>
                <Typography
                    align='center'
                    size='extraSmall'
                    tag='p'
                    variant='secondary'
                    weight='normal'
                >
                    {lastSeenTime ? lastSeenTime : 'в сети'}
                </Typography>
            </div>
            {user && (
                <Avatar
                    {...user}
                    size='extraSmall'
                    onClick={onProfileClick}
                />
            )}
        </div>
    );
};
