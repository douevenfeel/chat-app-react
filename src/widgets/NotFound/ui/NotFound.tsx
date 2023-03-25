import clsx from 'clsx';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getUserId } from 'entities/User';
import { getRouteProfile, getRouteLogin } from 'shared/const/router';
import { Button } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';

import cls from './NotFound.module.scss';

interface NotFoundProps {
    className?: string;
    withNavigate?: boolean;
}

const NotFound = memo(function NotFound({ className, withNavigate }: NotFoundProps) {
    const id = useSelector(getUserId);
    const navigate = useNavigate();
    const onHomeClick = useCallback(() => {
        id ? navigate(getRouteProfile(String(id))) : navigate(getRouteLogin());
    }, [id, navigate]);

    return (
        <div className={clsx(cls.notFound, className)}>
            <Text
                size='medium'
                tag='p'
                variant='secondary'
                weight='medium'
            >
                404 ошибка
            </Text>
            <Text
                size='large'
                tag='h1'
                weight='semi'
            >
                Страница не найдена
            </Text>
            {withNavigate && (
                <Button
                    size='medium'
                    variant='primary'
                    onClick={onHomeClick}
                >
                    {id ? 'Моя страница' : 'На главную'}
                </Button>
            )}
        </div>
    );
});

export default NotFound;
