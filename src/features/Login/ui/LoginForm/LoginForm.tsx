import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';

import { fetchLogin } from 'features/Login/model/services/fetchLogin/fetchLogin';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text } from 'shared/ui/Text/Text';

import { getLoginEmail } from '../../model/selectors/getLoginEmail/getLoginEmail';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { loginActions } from '../../model/slice/loginSlice';

import cls from './LoginForm.module.scss';

export const LoginForm = memo(function LoginForm() {
    const dispatch = useAppDispatch();
    const email = useSelector(getLoginEmail);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);
    const onEmailChange = useCallback(
        (value: string) => {
            dispatch(loginActions.setEmail(value));
        },
        [dispatch]
    );
    const onPasswordChange = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch]
    );

    const onLoginClick = useCallback(() => {
        email && password && dispatch(fetchLogin({ email, password }));
    }, [dispatch, email, password]);

    return (
        <div className={cls.loginForm}>
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
                variant='primary'
                onClick={onLoginClick}
            >
                Войти
            </Button>
            {error && (
                <Text
                    align='center'
                    size='medium'
                    tag='p'
                    variant='error'
                >
                    {error}
                </Text>
            )}
        </div>
    );
});
