import clsx from 'clsx';
import { useCallback } from 'react';

import { useTheme } from 'shared/lib/hooks/useTheme/useTheme';
import { Button } from 'shared/ui/Button/Button';
import { Typography } from 'shared/ui/Typography/Typography';

import cls from './Error.module.scss';

const Error = () => {
    const { theme } = useTheme();
    const onReloadClick = useCallback(() => {
        location.reload();
    }, []);

    return (
        <div className={clsx(cls.error, 'app', `${theme}Theme`)}>
            <Typography
                size='medium'
                tag='p'
                variant='secondary'
                weight='medium'
            >
                500 ошибка
            </Typography>
            <Typography
                size='extraLarge'
                tag='h1'
                weight='semi'
            >
                Произошла непредвиденная ошибка
            </Typography>
            <Button
                size='medium'
                variant='primary'
                onClick={onReloadClick}
            >
                Обновить страницу
            </Button>
        </div>
    );
};

export default Error;
