import { memo } from 'react';

import { loginReducer } from 'features/Login';
import { DefaultLayout } from 'layouts/DefaultLayout';
import type { ReducersList } from 'shared/lib/hooks/useLazyModuleLoading/useLazyModuleLoading';
import { useLazyModuleLoading } from 'shared/lib/hooks/useLazyModuleLoading/useLazyModuleLoading';
import { LoginCard } from 'widgets/LoginCard';

import cls from './LoginPage.module.scss';

const initialReducers: ReducersList = {
    login: loginReducer,
};

const LoginPage = memo(function LoginPage() {
    useLazyModuleLoading({ reducers: initialReducers });

    return (
        <DefaultLayout className={cls.loginPage}>
            <LoginCard />
        </DefaultLayout>
    );
});

export default LoginPage;
