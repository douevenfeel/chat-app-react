import clsx from 'clsx';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { memo } from 'react';

import cls from './Button.module.scss';

export type ButtonVariant = 'clean' | 'primary';

export type ButtonSize = 'small' | 'medium';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant: ButtonVariant;
    size?: ButtonSize;
    className?: string;
    overflowY?: boolean;
}

export const Button = memo(function Button({
    children,
    variant,
    size,
    className,
    disabled,
    overflowY,
    ...props
}: ButtonProps) {
    return (
        <button
            className={clsx(
                cls.button,
                cls[variant],
                size && cls[size],
                disabled && cls.disabled,
                overflowY && cls.overflowY,
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
});
