import clsx from 'clsx';
import { memo } from 'react';
import { useSelector } from 'react-redux';

import { getUserId } from 'entities/User';
import { Logo } from 'features/Logo';
import { Logout } from 'features/Logout';

import cls from './Header.module.scss';

export interface HeaderProps {
    className?: string;
}

export const Header = memo(function Header({ className }: HeaderProps) {
    const id = useSelector(getUserId);

    return (
        <div className={clsx(cls.header, className)}>
            <div className={cls.container}>
                <Logo />
                {id && <Logout className={cls.logout} />}
            </div>
        </div>
    );
});
