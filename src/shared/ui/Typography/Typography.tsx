import clsx from 'clsx';
import { memo } from 'react';

import cls from './Typography.module.scss';

type TypographyTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

type TypographyVariant = 'primary' | 'secondary' | 'error';

type TypographySize = 'small' | 'medium' | 'large';

type TypographyWeight = 'normal' | 'medium' | 'semi' | 'bold';

type TypographyAlign = 'left' | 'center' | 'right';

interface TypographyProps {
    className?: string;
    children: string;
    tag: TypographyTag;
    variant?: TypographyVariant;
    size?: TypographySize;
    weight?: TypographyWeight;
    align?: TypographyAlign;
    'data-testid'?: string;
}

export const Typography = memo(function Typography({
    className,
    children,
    tag,
    variant,
    align = 'left',
    size,
    weight,
    ...props
}: TypographyProps) {
    const TypographyTag = tag;

    return (
        <TypographyTag
            className={clsx(
                cls.typography,
                variant && cls[variant],
                cls[align],
                size && cls[`${size}Size`],
                weight && cls[`${weight}Weight`],
                className
            )}
            {...props}
        >
            {children}
        </TypographyTag>
    );
});
