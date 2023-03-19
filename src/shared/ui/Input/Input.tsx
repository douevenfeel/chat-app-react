import clsx from 'clsx';
import type { ChangeEvent, InputHTMLAttributes } from 'react';

import cls from './Input.module.scss';

type InputVariant = 'clear' | 'primary' | 'secondary' | 'outline';

type InputSize = 'small' | 'medium';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'size'>;

interface InputProps extends HTMLInputProps {
    className?: string;
    variant: InputVariant;
    size: InputSize;
    value?: string;
    onChange?: (value: string) => void;
}

export const Input = ({ className, variant, size, value, onChange, ...props }: InputProps) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <input
            className={clsx(cls.input, cls[variant], cls[size], className)}
            value={value}
            onChange={onChangeHandler}
            {...props}
        />
    );
};
