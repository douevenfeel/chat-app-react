import clsx from 'clsx';
import { memo, useCallback } from 'react';

import { useTheme } from 'shared/lib/hooks/useTheme/useTheme';
import { Button } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';

import cls from './Error.module.scss';

interface ErrorProps {
    className?: string;
}

const Error = memo(function Error({ className }: ErrorProps) {
    const { theme } = useTheme();
    const onReloadClick = useCallback(() => {
        location.reload();
    }, []);

    return (
        <div className={clsx(cls.error, 'app', `${theme}Theme`, className)}>
            <Text
                size='medium'
                tag='p'
                variant='secondary'
                weight='medium'
            >
                500 ошибка
            </Text>
            <Text
                size='large'
                tag='h1'
                weight='semi'
            >
                Произошла непредвиденная ошибка
            </Text>
            <Button
                size='medium'
                variant='primary'
                onClick={onReloadClick}
            >
                Обновить страницу
            </Button>
        </div>
    );
});

export default Error;
