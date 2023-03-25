import clsx from 'clsx';
import { memo, useCallback } from 'react';

import LogoutIcon from 'shared/assets/icons/logout.svg';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button } from 'shared/ui/Button/Button';

import { fetchLogout } from '../model/services/fetchLogout/fetchLogout';

import cls from './Logout.module.scss';

export interface LogoutProps {
    className?: string;
}

export const Logout = memo(function Logout({ className }: LogoutProps) {
    const dispatch = useAppDispatch();
    const onLogoutClick = useCallback(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchLogout(null));
        }
    }, [dispatch]);

    return (
        <div
            className={clsx(cls.logout, className)}
            onClick={onLogoutClick}
        >
            <LogoutIcon className={cls.icon} />
            <Button
                className={cls.button}
                size='small'
                variant='clean'
            >
                Выйти
            </Button>
        </div>
    );
});
