import type { FormEvent } from 'react';
import { memo, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { getRegistrationEmail } from 'features/Registration/model/selectors/getRegistrationEmail/getRegistrationEmail';
import { getRegistrationError } from 'features/Registration/model/selectors/getRegistrationError/getRegistrationError';
import { fetchRegistrationConfirmEmail } from 'features/Registration/model/services/fetchRegistrationConfirmEmail/fetchRegistrationConfirmEmail';
import { registrationActions } from 'features/Registration/model/slice/registrationSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Typography } from 'shared/ui/Typography/Typography';

import cls from './RegistrationEmailForm.module.scss';

export const RegistrationEmailForm = memo(function RegistrationEmailForm() {
    const dispatch = useAppDispatch();
    const email = useSelector(getRegistrationEmail);
    const error = useSelector(getRegistrationError);
    const onEmailChange = useCallback(
        (value: string) => {
            dispatch(registrationActions.setEmail(value.trim()));
        },
        [dispatch]
    );
    const handleSubmit = useCallback(() => {
        if (__PROJECT__ !== 'storybook') {
            email && dispatch(fetchRegistrationConfirmEmail({ email }));
        }
    }, [dispatch, email]);
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
        document.title = 'Введите почту';
        document.addEventListener('keydown', handleEnterKey);

        return () => {
            document.removeEventListener('keydown', handleEnterKey);
        };
    }, [handleEnterKey]);

    return (
        <form
            className={cls.registrationEmailForm}
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
            <Button
                disabled={!email}
                size='medium'
                type='submit'
                variant='primary'
            >
                Продолжить
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
