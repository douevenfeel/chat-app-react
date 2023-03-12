import clsx from 'clsx';
import type { InputHTMLAttributes } from 'react';

import cls from './Input.module.scss';

export type InputVariant = 'clear' | 'primary' | 'secondary';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    variant: InputVariant;
}

export const Input = ({ className, variant, ...props }: InputProps) => {
    return (
        <input
            className={clsx(cls.input, cls[variant], className)}
            {...props}
        />
    );
};
