import type { FormEvent } from 'react';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';

import { profileActions } from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';

import { getProfileUpdateInfoFirstName } from '../model/selectors/getProfileUpdateInfoFirstName/getProfileUpdateInfoFirstName';
import { getProfileUpdateInfoLastName } from '../model/selectors/getProfileUpdateInfoLastName/getProfileUpdateInfoLastName';
import { fetchUpdateProfileInfo } from '../model/services/fetchUpdateProfileInfo/fetchUpdateProfileInfo';

import cls from './ProfileUpdateInfoForm.module.scss';

export const ProfileUpdateInfoForm = () => {
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
    const onSubmit = useCallback(
        (e: FormEvent) => {
            e.preventDefault();
            if (__PROJECT__ !== 'storybook') {
                firstName && lastName && dispatch(fetchUpdateProfileInfo({ firstName, lastName }));
            }
        },
        [dispatch, firstName, lastName]
    );
    const onCancelClick = useCallback(() => {
        dispatch(profileActions.setIsUpdatingInfo(false));
    }, [dispatch]);

    return (
        <form
            className={cls.profileUpdateInfoForm}
            onSubmit={onSubmit}
        >
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
                type='submit'
                variant='primary'
            >
                Сохранить
            </Button>
            <Button
                size='small'
                type='reset'
                variant='primary'
                onClick={onCancelClick}
            >
                Отменить
            </Button>
        </form>
    );
};
