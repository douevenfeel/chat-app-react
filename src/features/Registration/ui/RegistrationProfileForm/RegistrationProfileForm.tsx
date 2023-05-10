import type { FormEvent } from 'react';
import { memo, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { getRegistrationEmail } from 'features/Registration/model/selectors/getRegistrationEmail/getRegistrationEmail';
import { getRegistrationError } from 'features/Registration/model/selectors/getRegistrationError/getRegistrationError';
import { getRegistrationFirstName } from 'features/Registration/model/selectors/getRegistrationFirstName/getRegistrationFirstName';
import { getRegistrationLastName } from 'features/Registration/model/selectors/getRegistrationLastName/getRegistrationLastName';
import { getRegistrationPassword } from 'features/Registration/model/selectors/getRegistrationPassword/getRegistrationPassword';
import { fetchRegistration } from 'features/Registration/model/services/fetchRegistration/fetchRegistration';
import { registrationActions } from 'features/Registration/model/slice/registrationSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Typography } from 'shared/ui/Typography/Typography';

import cls from './RegistrationProfileForm.module.scss';

export const RegistrationProfileForm = memo(function RegistrationProfileForm() {
    const dispatch = useAppDispatch();
    const email = useSelector(getRegistrationEmail);
    const firstName = useSelector(getRegistrationFirstName);
    const lastName = useSelector(getRegistrationLastName);
    const password = useSelector(getRegistrationPassword);
    const error = useSelector(getRegistrationError);
    const onEmailChange = useCallback(
        (value: string) => {
            dispatch(registrationActions.setEmail(value.trim()));
        },
        [dispatch]
    );
    const onFirstNameChange = useCallback(
        (value: string) => {
            dispatch(registrationActions.setFirstName(value.trim()));
        },
        [dispatch]
    );
    const onLastNameChange = useCallback(
        (value: string) => {
            dispatch(registrationActions.setLastName(value.trim()));
        },
        [dispatch]
    );
    const onPasswordChange = useCallback(
        (value: string) => {
            dispatch(registrationActions.setPassword(value.trim()));
        },
        [dispatch]
    );
    const onSubmit = useCallback(
        (e: FormEvent) => {
            e.preventDefault();
            if (__PROJECT__ !== 'storybook') {
                email &&
                    firstName &&
                    lastName &&
                    password &&
                    dispatch(fetchRegistration({ email, firstName, lastName, password }));
            }
        },
        [dispatch, email, firstName, lastName, password]
    );
    useEffect(() => {
        document.title = 'Заполните профиль';
    }, []);

    return (
        <form
            className={cls.registrationProfileForm}
            onSubmit={onSubmit}
        >
            <Input
                placeholder='Почта'
                size='medium'
                value={email}
                variant='outline'
                onChange={onEmailChange}
            />
            <Input
                autoFocus
                placeholder='Имя'
                size='medium'
                value={firstName}
                variant='outline'
                onChange={onFirstNameChange}
            />
            <Input
                placeholder='Фамилия'
                size='medium'
                value={lastName}
                variant='outline'
                onChange={onLastNameChange}
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
                disabled={!email || !firstName || !lastName || !password}
                size='medium'
                type='submit'
                variant='primary'
            >
                Зарегистрироваться
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
});
