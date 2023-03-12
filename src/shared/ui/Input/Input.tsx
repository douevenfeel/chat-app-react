import clsx from 'clsx';
import type { ChangeEvent, InputHTMLAttributes } from 'react';

import cls from './Input.module.scss';

export type InputVariant = 'clear' | 'primary' | 'secondary';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface InputProps extends HTMLInputProps {
    className?: string;
    variant: InputVariant;
    value?: string;
    onChange?: (value: string) => void;
}

export const Input = ({ className, variant, value, onChange, ...props }: InputProps) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <input
            className={clsx(cls.input, cls[variant], className)}
            value={value}
            onChange={onChangeHandler}
            {...props}
        />
    );
};
