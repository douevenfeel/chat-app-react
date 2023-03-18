import { memo } from 'react';

import { loginReducer } from 'features/Login/model/slice/loginSlice';
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
        <div className={cls.loginPage}>
            <LoginCard />
        </div>
    );
});

export default LoginPage;
