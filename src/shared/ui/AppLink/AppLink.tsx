import clsx from 'clsx';
import type { ReactNode } from 'react';
import React, { memo } from 'react';
import type { LinkProps } from 'react-router-dom';
import { Link } from 'react-router-dom';

import cls from './AppLink.module.scss';

interface AppLinkProps extends LinkProps {
    className?: string;
    children: ReactNode;
}

export const AppLink = memo(function AppLink({ className, children, ...props }: AppLinkProps) {
    return (
        <Link
            className={clsx(cls.appLink, className)}
            {...props}
        >
            {children}
        </Link>
    );
});
