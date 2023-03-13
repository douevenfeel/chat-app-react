import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { getRouteLogin } from 'shared/const/router';
import { Button } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';

import cls from './RegistrationInfo.module.scss';

export const RegistrationInfo = memo(function RegistrationInfo() {
    const navigate = useNavigate();
    const onLoginClick = useCallback(() => {
        navigate(getRouteLogin());
    }, [navigate]);
    return (
        <div className={cls.registrationInfo}>
            <Text
                align='center'
                size='medium'
                tag='p'
                variant='primary'
            >
                После входа вы получите доступ ко всем возможностям CHAT APP
            </Text>
            <Button
                size='medium'
                variant='primary'
                onClick={onLoginClick}
            >
                Войти
            </Button>
        </div>
    );
});