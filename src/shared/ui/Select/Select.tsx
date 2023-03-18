import clsx from 'clsx';
import type { ChangeEvent } from 'react';
import { memo, useMemo } from 'react';

import cls from './Select.module.scss';

export interface SelectOption {
    value: string;
    content: string;
}

interface SelectProps {
    className?: string;
    options: SelectOption[];
    value: string;
    onChange: (value: string) => void;
}

export const Select = memo(function Select({ className, options, value, onChange }: SelectProps) {
    const optionsList = useMemo(
        () =>
            options.map((option) => (
                <option
                    className={cls.option}
                    key={option.value}
                    value={option.value}
                >
                    {option.content}
                </option>
            )),
        [options]
    );

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange(e.target.value);
    };

    return (
        <select
            className={clsx(cls.select, className)}
            value={value}
            onChange={onChangeHandler}
        >
            {optionsList}
        </select>
    );
});
