import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getUserId } from 'entities/User';
import LogoIcon from 'shared/assets/icons/logo.svg';
import { getRouteProfile } from 'shared/const/router';
import { Text } from 'shared/ui/Text/Text';

import cls from './Logo.module.scss';

export const Logo = memo(function Logo() {
    const id = useSelector(getUserId);
    const navigate = useNavigate();
    const onLogoClick = useCallback(() => {
        navigate(getRouteProfile(String(id)));
    }, [id, navigate]);

    return (
        <div
            className={cls.logo}
            onClick={onLogoClick}
        >
            <LogoIcon className={cls.logoIcon} />
            <Text
                size='large'
                tag='h1'
                variant='primary'
            >
                CHAT APP
            </Text>
        </div>
    );
});
