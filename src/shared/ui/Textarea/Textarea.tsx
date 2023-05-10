import clsx from 'clsx';
import type { ChangeEvent, TextareaHTMLAttributes } from 'react';
import { useCallback, useEffect, useRef } from 'react';

import cls from './Textarea.module.scss';

type HTMLTextareaProps = Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'value' | 'onChange'>;

interface TextareaProps extends HTMLTextareaProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
}

export const Textarea = ({ className, value, onChange, ...props }: TextareaProps) => {
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        onChange?.(e.target.value);
    };
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
        }
    }, []);
    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = '32px';
            textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 90)}px`;
        }
        document.addEventListener('keydown', onKeyDown);

        return () => {
            document.removeEventListener('keydown', onKeyDown);
        };
    }, [onKeyDown, value]);

    return (
        <textarea
            className={clsx(cls.textarea, className)}
            ref={textareaRef}
            value={value}
            onChange={onChangeHandler}
            {...props}
        />
    );
};
