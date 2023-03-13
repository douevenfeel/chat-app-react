import { memo } from 'react';

import { LoginForm, LoginInfo } from 'features/Login';
import { Text } from 'shared/ui/Text/Text';

import cls from './LoginCard.module.scss';

export const LoginCard = memo(function LoginCard() {
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
