import type { ReactNode } from 'react';
import { memo } from 'react';

import { Header } from 'widgets/Header';

import cls from './DefaultLayout.module.scss';

export interface DefaultLayoutProps {
    className?: string;
    children: ReactNode;
}

export const DefaultLayout = memo(function DefaultLayout({ className, children }: DefaultLayoutProps) {
    return (
        <div>
            <Header className={cls.header} />
            <div className={className}>{children}</div>
        </div>
    );
});
