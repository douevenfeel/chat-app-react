import { memo } from 'react';

import { registrationReducer } from 'features/Registration';
import { DefaultLayout } from 'layouts/DefaultLayout';
import type { ReducersList } from 'shared/lib/hooks/useLazyModuleLoading/useLazyModuleLoading';
import { useLazyModuleLoading } from 'shared/lib/hooks/useLazyModuleLoading/useLazyModuleLoading';
import { RegistrationCard } from 'widgets/RegistrationCard';

import cls from './RegistrationPage.module.scss';

const initialReducers: ReducersList = {
    registration: registrationReducer,
};

const RegistrationPage = memo(function RegistrationPage() {
    useLazyModuleLoading({ reducers: initialReducers });

    return (
        <DefaultLayout className={cls.registrationPage}>
            <RegistrationCard />
        </DefaultLayout>
    );
});

export default RegistrationPage;
