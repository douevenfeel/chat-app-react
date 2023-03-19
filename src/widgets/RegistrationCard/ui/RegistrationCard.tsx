import { memo } from 'react';

import { RegistrationInfo } from 'features/Registration';
import { Text } from 'shared/ui/Text/Text';

import { useRegistrationForm } from '../lib/hooks/useRegistrationForm/useRegistrationForm';

import cls from './RegistrationCard.module.scss';

export const RegistrationCard = memo(function RegistrationCard() {
    const { form, text } = useRegistrationForm();

    return (
        <div className={cls.registrationCard}>
            <Text
                align='center'
                size='large'
                tag='h1'
                variant='primary'
            >
                Chat app
            </Text>
            <Text
                align='center'
                size='medium'
                tag='h2'
                variant='primary'
            >
                {text}
            </Text>
            {form}
            <RegistrationInfo />
        </div>
    );
});
