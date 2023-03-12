import { loginReducer } from 'features/Login/model/slice/loginSlice';
import type { ReducersList } from 'shared/lib/hooks/useLazyModuleLoading/useLazyModuleLoading';
import { useLazyModuleLoading } from 'shared/lib/hooks/useLazyModuleLoading/useLazyModuleLoading';
import { Text } from 'shared/ui/Text/Text';
import { LoginCard } from 'widgets/LoginCard';

import cls from './LoginPage.module.scss';

const initialReducers: ReducersList = {
    login: loginReducer,
};

const LoginPage = () => {
    useLazyModuleLoading({ reducers: initialReducers });
    return (
        <div className={cls.loginPage}>
            <Text
                align='center'
                size='large'
                tag='h1'
                variant='primary'
            >
                Chat app
            </Text>
            <LoginCard />
        </div>
    );
};

export default LoginPage;
