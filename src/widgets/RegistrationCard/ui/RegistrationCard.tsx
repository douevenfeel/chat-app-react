import { memo } from 'react';

import { RegistrationInfo } from 'features/Registration';
import { Typography } from 'shared/ui/Typography/Typography';

import { useRegistrationForm } from '../lib/hooks/useRegistrationForm/useRegistrationForm';

import cls from './RegistrationCard.module.scss';

export const RegistrationCard = memo(function RegistrationCard() {
    const { form, text } = useRegistrationForm();

    return (
        <div className={cls.registrationCard}>
            <Typography
                align='center'
                size='extraLarge'
                tag='h1'
                variant='primary'
                weight='semi'
            >
                Chat app
            </Typography>
            <Typography
                align='center'
                size='medium'
                tag='h2'
                variant='primary'
                weight='medium'
            >
                {text}
            </Typography>
            {form}
            <RegistrationInfo />
        </div>
    );
});
