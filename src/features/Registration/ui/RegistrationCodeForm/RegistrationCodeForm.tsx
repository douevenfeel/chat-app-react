import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';

import { getRegistrationConfirmCode } from 'features/Registration/model/selectors/getRegistrationConfirmCode/getRegistrationConfirmCode';
import { getRegistrationEmail } from 'features/Registration/model/selectors/getRegistrationEmail/getRegistrationEmail';
import { getRegistrationError } from 'features/Registration/model/selectors/getRegistrationError/getRegistrationError';
import { getRegistrationIsLoading } from 'features/Registration/model/selectors/getRegistrationIsLoaing/getRegistrationIsLoading';
import { fetchRegistrationConfirmCode } from 'features/Registration/model/services/fetchRegistrationConfirmCode/fetchRegistrationConfirmCode';
import { registrationActions } from 'features/Registration/model/slice/registrationSlice';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text } from 'shared/ui/Text/Text';

import cls from './RegistrationCodeForm.module.scss';

export const RegistrationCodeForm = memo(function RegistrationCodeForm() {
    const dispatch = useAppDispatch();
    const email = useSelector(getRegistrationEmail);
    const confirmCode = useSelector(getRegistrationConfirmCode);
    const error = useSelector(getRegistrationError);
    const isLoading = useSelector(getRegistrationIsLoading);
    const onEmailChange = useCallback(
        (value: string) => {
            dispatch(registrationActions.setEmail(value));
        },
        [dispatch]
    );
    const onConfirmCodeChange = useCallback(
        (value: string) => {
            dispatch(registrationActions.setConfirmCode(value));
        },
        [dispatch]
    );

    const onCodeClick = useCallback(() => {
        email && confirmCode && dispatch(fetchRegistrationConfirmCode({ email, confirmCode }));
    }, [confirmCode, dispatch, email]);
    return (
        <div className={cls.registrationCodeForm}>
            <Input
                placeholder='Почта'
                value={email}
                variant='secondary'
                onChange={onEmailChange}
            />
            <Input
                autoFocus
                placeholder='Код подтверждения'
                value={confirmCode}
                variant='secondary'
                onChange={onConfirmCodeChange}
            />
            <Button
                disabled={!email || !confirmCode}
                size='medium'
                variant='primary'
                onClick={onCodeClick}
            >
                Подтвердить
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
