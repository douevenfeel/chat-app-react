import { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getUserId } from 'entities/User';
import { LoginForm, LoginInfo } from 'features/Login';
import { getRouteProfile } from 'shared/const/router';
import { Text } from 'shared/ui/Text/Text';

import cls from './LoginCard.module.scss';

export const LoginCard = memo(function LoginCard() {
    const navigate = useNavigate();
    const id = useSelector(getUserId);
    useEffect(() => {
        id && navigate(getRouteProfile(String(id)));
    }, [id, navigate]);
    return (
        <div className={cls.loginCard}>
            <Text
                align='center'
                size='large'
                tag='h1'
                variant='primary'
            >
                Chat app
            </Text>
            <Text
                align='center'
                size='medium'
                tag='h2'
                variant='primary'
            >
                Вход
            </Text>
            <LoginForm />
            <LoginInfo />
        </div>
    );
});
