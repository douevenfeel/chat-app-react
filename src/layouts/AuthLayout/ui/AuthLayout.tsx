import clsx from 'clsx';
import type { ReactNode } from 'react';
import { memo } from 'react';

import { Header } from 'widgets/Header';
import { Sidebar } from 'widgets/Sidebar';

import cls from './AuthLayout.module.scss';

interface AuthLayoutProps {
    children: ReactNode;
    className?: string;
}

export const AuthLayout = memo(function AuthLayout({ children, className }: AuthLayoutProps) {
    return (
        <div className={cls.authLayout}>
            <Header className={cls.header} />
            <div className={cls.container}>
                <Sidebar />
                <div className={clsx(cls.page, className)}>{children}</div>
            </div>
        </div>
    );
});
