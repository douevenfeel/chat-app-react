import clsx from 'clsx';
import { memo } from 'react';

import cls from './Text.module.scss';

type TextTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

type TextVariant = 'primary' | 'secondary' | 'error';

type TextSize = 'small' | 'medium' | 'large';

type TextWeight = 'normal' | 'medium' | 'semi' | 'bold';

type TextAlign = 'left' | 'center' | 'right';

interface TextProps {
    className?: string;
    children: string;
    tag: TextTag;
    variant?: TextVariant;
    size?: TextSize;
    weight?: TextWeight;
    align?: TextAlign;
    'data-testid'?: string;
}

export const Text = memo(function Text({
    className,
    children,
    tag,
    variant = 'primary',
    align = 'left',
    size = 'medium',
    weight = 'normal',
    ...props
}: TextProps) {
    const TextTag = tag;

    return (
        <TextTag
            className={clsx(cls.text, cls[variant], cls[align], cls[`${size}Size`], cls[`${weight}Weight`], className)}
            {...props}
        >
            {children}
        </TextTag>
    );
});
