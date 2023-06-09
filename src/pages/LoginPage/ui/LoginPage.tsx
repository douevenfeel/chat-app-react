import { useEffect } from 'react';

import { loginReducer } from 'features/Login';
import { DefaultLayout } from 'layouts/DefaultLayout';
import type { ReducersList } from 'shared/lib/hooks/useLazyModuleLoading/useLazyModuleLoading';
import { useLazyModuleLoading } from 'shared/lib/hooks/useLazyModuleLoading/useLazyModuleLoading';
import { LoginCard } from 'widgets/LoginCard';

import cls from './LoginPage.module.scss';

const initialReducers: ReducersList = {
    login: loginReducer,
};

const LoginPage = () => {
    useLazyModuleLoading({ reducers: initialReducers });
    useEffect(() => {
        document.title = 'Вход';
    }, []);

    return (
        <DefaultLayout className={cls.loginPage}>
            <LoginCard />
        </DefaultLayout>
    );
};

export default LoginPage;
