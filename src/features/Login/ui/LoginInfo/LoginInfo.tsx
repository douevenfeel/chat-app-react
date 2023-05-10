import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { getRouteRegistration } from 'shared/const/router';
import { Button } from 'shared/ui/Button/Button';
import { Typography } from 'shared/ui/Typography/Typography';

import cls from './LoginInfo.module.scss';

export const LoginInfo = () => {
    const navigate = useNavigate();
    const onRegistrationClick = useCallback(() => {
        navigate(getRouteRegistration());
    }, [navigate]);

    return (
        <div className={cls.loginInfo}>
            <Typography
                align='center'
                size='medium'
                tag='p'
                variant='primary'
                weight='medium'
            >
                После регистрации вы получите доступ ко всем возможностям CHAT APP
            </Typography>
            <Button
                size='medium'
                variant='primary'
                onClick={onRegistrationClick}
            >
                Зарегистрироваться
            </Button>
        </div>
    );
};
