import type { FormEvent } from 'react';
import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { getRegistrationConfirmCode } from 'features/Registration/model/selectors/getRegistrationConfirmCode/getRegistrationConfirmCode';
import { getRegistrationEmail } from 'features/Registration/model/selectors/getRegistrationEmail/getRegistrationEmail';
import { getRegistrationError } from 'features/Registration/model/selectors/getRegistrationError/getRegistrationError';
import { fetchRegistrationConfirmCode } from 'features/Registration/model/services/fetchRegistrationConfirmCode/fetchRegistrationConfirmCode';
import { registrationActions } from 'features/Registration/model/slice/registrationSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Typography } from 'shared/ui/Typography/Typography';

import cls from './RegistrationCodeForm.module.scss';

export const RegistrationCodeForm = () => {
    const dispatch = useAppDispatch();
    const email = useSelector(getRegistrationEmail);
    const confirmCode = useSelector(getRegistrationConfirmCode);
    const error = useSelector(getRegistrationError);
    const onEmailChange = useCallback(
        (value: string) => {
            dispatch(registrationActions.setEmail(value.trim()));
        },
        [dispatch]
    );
    const onConfirmCodeChange = useCallback(
        (value: string) => {
            dispatch(registrationActions.setConfirmCode(value.trim()));
        },
        [dispatch]
    );
    const handleSubmit = useCallback(() => {
        if (__PROJECT__ !== 'storybook') {
            email && confirmCode && dispatch(fetchRegistrationConfirmCode({ email, confirmCode }));
        }
    }, [confirmCode, dispatch, email]);
    const onSubmit = useCallback(
        (e: FormEvent) => {
            e.preventDefault();
            handleSubmit();
        },
        [handleSubmit]
    );
    const handleEnterKey = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Enter') {
                handleSubmit();
            }
        },
        [handleSubmit]
    );
    useEffect(() => {
        document.title = 'Введите код подтверждения';
        document.addEventListener('keydown', handleEnterKey);

        return () => {
            document.removeEventListener('keydown', handleEnterKey);
        };
    }, [handleEnterKey]);

    return (
        <form
            className={cls.registrationCodeForm}
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
                placeholder='Код подтверждения'
                size='medium'
                value={confirmCode}
                variant='outline'
                onChange={onConfirmCodeChange}
            />
            <Button
                disabled={!email || !confirmCode}
                size='medium'
                type='submit'
                variant='primary'
            >
                Подтвердить
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
