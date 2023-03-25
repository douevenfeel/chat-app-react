import { useEffect } from 'react';

import { NotFound } from 'widgets/NotFound';

import cls from './NotFoundPage.module.scss';

const NotFoundPage = () => {
    useEffect(() => {
        document.title = 'Страница не найдена';
    }, []);

    return (
        <NotFound
            withNavigate
            className={cls.notFoundPage}
        />
    );
};

export default NotFoundPage;
