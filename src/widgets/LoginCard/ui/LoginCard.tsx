import { LoginForm, LoginInfo } from 'features/Login';
import { Typography } from 'shared/ui/Typography/Typography';

import cls from './LoginCard.module.scss';

export const LoginCard = () => {
    return (
        <div className={cls.loginCard}>
            <Typography
                align='center'
                size='large'
                tag='h1'
                variant='primary'
                weight='semi'
            >
                Chat app
            </Typography>
            <Typography
                align='center'
                size='medium'
                tag='h2'
                variant='primary'
                weight='medium'
            >
                Вход
            </Typography>
            <LoginForm />
            <LoginInfo />
        </div>
    );
};
