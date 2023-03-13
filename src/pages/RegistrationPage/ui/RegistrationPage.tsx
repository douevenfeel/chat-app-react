import { registrationReducer } from 'features/Registration';
import type { ReducersList } from 'shared/lib/hooks/useLazyModuleLoading/useLazyModuleLoading';
import { useLazyModuleLoading } from 'shared/lib/hooks/useLazyModuleLoading/useLazyModuleLoading';
import { RegistrationCard } from 'widgets/RegistrationCard';

import cls from './RegistrationPage.module.scss';

const initialReducers: ReducersList = {
    registration: registrationReducer,
};

const RegistrationPage = () => {
    useLazyModuleLoading({ reducers: initialReducers });

    return (
        <div className={cls.registrationPage}>
            <RegistrationCard />
        </div>
    );
};

export default RegistrationPage;
