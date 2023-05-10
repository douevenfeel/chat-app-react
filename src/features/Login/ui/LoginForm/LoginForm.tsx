import type { FormEvent } from 'react';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';

import { fetchLogin } from 'features/Login/model/services/fetchLogin/fetchLogin';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Typography } from 'shared/ui/Typography/Typography';

import { getLoginEmail } from '../../model/selectors/getLoginEmail/getLoginEmail';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { loginActions } from '../../model/slice/loginSlice';

import cls from './LoginForm.module.scss';

export const LoginForm = () => {
    const dispatch = useAppDispatch();
    const email = useSelector(getLoginEmail);
    const password = useSelector(getLoginPassword);
    const error = useSelector(getLoginError);
    const onEmailChange = useCallback(
        (value: string) => {
            dispatch(loginActions.setEmail(value.trim()));
        },
        [dispatch]
    );
    const onPasswordChange = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value.trim()));
        },
        [dispatch]
    );

    const onSubmit = useCallback(
        (e: FormEvent) => {
            e.preventDefault();
            if (__PROJECT__ !== 'storybook') {
                email && password && dispatch(fetchLogin({ email, password }));
            }
        },
        [dispatch, email, password]
    );

    return (
        <form
            className={cls.loginForm}
            onSubmit={onSubmit}
        >
            <Input
                autoFocus
                placeholder='Почта'
                size='medium'
                value={email}
                variant='outline'
                onChange={onEmailChange}
            />
            <Input
                placeholder='Пароль'
                size='medium'
                type='password'
                value={password}
                variant='outline'
                onChange={onPasswordChange}
            />
            <Button
                disabled={!email || !password}
                size='medium'
                type='submit'
                variant='primary'
            >
                Войти
            </Button>
            {error && (
                <Typography
                    align='center'
                    size='medium'
                    tag='p'
                    variant='error'
                    weight='medium'
                >
                    {error}
                </Typography>
            )}
        </form>
    );
};
