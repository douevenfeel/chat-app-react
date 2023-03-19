import { NotFound } from 'widgets/NotFound';

import cls from './NotFoundPage.module.scss';

const NotFoundPage = () => {
    return (
        <NotFound
            withNavigate
            className={cls.notFoundPage}
        />
    );
};

export default NotFoundPage;
