import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { getRouteRegistration } from 'shared/const/router';
import { Button } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';

import cls from './LoginInfo.module.scss';

export const LoginInfo = memo(function LoginInfo() {
    const navigate = useNavigate();
    const onRegistrationClick = useCallback(() => {
        navigate(getRouteRegistration());
    }, [navigate]);
    return (
        <div className={cls.loginInfo}>
            <Text
                align='center'
                size='medium'
                tag='p'
                variant='primary'
            >
                После регистрации вы получите доступ ко всем возможностям VK ID
            </Text>
            <Button
                size='medium'
                variant='primary'
                onClick={onRegistrationClick}
            >
                Зарегистрироваться
            </Button>
        </div>
    );
});
