import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getUserId } from 'entities/User';
import { getRouteLogin, getRouteProfile } from 'shared/const/router';
import { Button } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';

import cls from './NotFoundPage.module.scss';

const NotFoundPage = () => {
    const id = useSelector(getUserId);
    const navigate = useNavigate();
    const onHomeClick = useCallback(() => {
        id ? navigate(getRouteProfile(String(id))) : navigate(getRouteLogin());
    }, [id, navigate]);

    return (
        <div className={cls.notFoundPage}>
            <Text
                align='center'
                size='medium'
                tag='p'
                variant='secondary'
            >
                404 ошибка
            </Text>
            <Text
                align='center'
                size='large'
                tag='h1'
            >
                Страница не найдена
            </Text>
            <Button
                size='medium'
                variant='primary'
                onClick={onHomeClick}
            >
                {id ? 'Моя страница' : 'На главную'}
            </Button>
        </div>
    );
};

export default NotFoundPage;
