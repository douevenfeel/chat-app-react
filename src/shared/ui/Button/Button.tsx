import clsx from 'clsx';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { memo } from 'react';

import cls from './Button.module.scss';

export type ButtonVariant = 'clean' | 'primary';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant: ButtonVariant;
    className?: string;
}

export const Button = memo(function Button({ children, variant, className, ...props }: ButtonProps) {
    return (
        <button
            className={clsx(cls.button, cls[variant], className)}
            {...props}
        >
            {children}
        </button>
    );
});
