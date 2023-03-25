import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';

import { profileActions } from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';

import { getProfileUpdateInfoFirstName } from '../model/selectors/getProfileUpdateInfoFirstName/getProfileUpdateInfoFirstName';
import { getProfileUpdateInfoLastName } from '../model/selectors/getProfileUpdateInfoLastName/getProfileUpdateInfoLastName';
import { fetchUpdateProfileInfo } from '../model/services/fetchUpdateProfileInfo/fetchUpdateProfileInfo';

import cls from './ProfileUpdateInfoForm.module.scss';

export const ProfileUpdateInfoForm = memo(function ProfileUpdateInfoForm() {
    const dispatch = useAppDispatch();
    const firstName = useSelector(getProfileUpdateInfoFirstName);
    const lastName = useSelector(getProfileUpdateInfoLastName);
    const onFirstNameChange = useCallback(
        (value: string) => {
            dispatch(profileActions.setUpdateFirstName(value.trim()));
        },
        [dispatch]
    );
    const onLastNameChange = useCallback(
        (value: string) => {
            dispatch(profileActions.setUpdateLastName(value.trim()));
        },
        [dispatch]
    );
    const onSave = useCallback(() => {
        if (__PROJECT__ !== 'storybook') {
            firstName && lastName && dispatch(fetchUpdateProfileInfo({ firstName, lastName }));
        }
    }, [dispatch, firstName, lastName]);
    const onCancel = useCallback(() => {
        dispatch(profileActions.setIsUpdatingInfo(false));
    }, [dispatch]);

    return (
        <div className={cls.profileUpdateInfoForm}>
            <Input
                autoFocus
                placeholder='Имя'
                size='small'
                value={firstName}
                variant='outline'
                onChange={onFirstNameChange}
            />
            <Input
                placeholder='Фамилия'
                size='small'
                value={lastName}
                variant='outline'
                onChange={onLastNameChange}
            />
            <Button
                disabled={!firstName || !lastName}
                size='small'
                variant='primary'
                onClick={onSave}
            >
                Сохранить
            </Button>
            <Button
                size='small'
                variant='primary'
                onClick={onCancel}
            >
                Отменить
            </Button>
        </div>
    );
});
