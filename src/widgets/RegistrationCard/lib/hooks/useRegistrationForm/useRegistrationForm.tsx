import { useSelector } from 'react-redux';

import {
    getRegistrationEmail,
    getRegistrationSuccessEmail,
    getRegistrationIsConfirmed,
    RegistrationEmailForm,
    RegistrationCodeForm,
    RegistrationProfileForm,
} from 'features/Registration';

export const useRegistrationForm = () => {
    const email = useSelector(getRegistrationEmail);
    const successEmail = useSelector(getRegistrationSuccessEmail);
    const isConfirmed = useSelector(getRegistrationIsConfirmed);
    let form, text;
    if (email !== successEmail) {
        form = <RegistrationEmailForm />;
        text = 'Введите почту';
    } else if (email === successEmail && !isConfirmed) {
        form = <RegistrationCodeForm />;
        text = 'Введите код подтверждения';
    } else {
        form = <RegistrationProfileForm />;
        text = 'Заполните профиль';
    }

    return { form, text };
};
