import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';

import { getRegistrationEmail } from 'features/Registration/model/selectors/getRegistrationEmail/getRegistrationEmail';
import { getRegistrationError } from 'features/Registration/model/selectors/getRegistrationError/getRegistrationError';
import { getRegistrationIsLoading } from 'features/Registration/model/selectors/getRegistrationIsLoaing/getRegistrationIsLoading';
import { fetchRegistrationConfirmEmail } from 'features/Registration/model/services/fetchRegistrationConfirmEmail/fetchRegistrationConfirmEmail';
import { registrationActions } from 'features/Registration/model/slice/registrationSlice';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text } from 'shared/ui/Text/Text';

import cls from './RegistrationEmailForm.module.scss';

export const RegistrationEmailForm = memo(function RegistrationEmailForm() {
    const dispatch = useAppDispatch();
    const email = useSelector(getRegistrationEmail);
    const error = useSelector(getRegistrationError);
    const isLoading = useSelector(getRegistrationIsLoading);
    const onEmailChange = useCallback(
        (value: string) => {
            dispatch(registrationActions.setEmail(value));
        },
        [dispatch]
    );

    const onEmailClick = useCallback(() => {
        email && dispatch(fetchRegistrationConfirmEmail({ email }));
    }, [dispatch, email]);
    return (
        <div className={cls.registrationEmailForm}>
            <Input
                autoFocus
                placeholder='Почта'
                value={email}
                variant='secondary'
                onChange={onEmailChange}
            />
            <Button
                disabled={!email}
                size='medium'
                variant='primary'
                onClick={onEmailClick}
            >
                Продолжить
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