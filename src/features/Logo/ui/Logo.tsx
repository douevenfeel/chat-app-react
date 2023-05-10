import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getUserId } from 'entities/User';
import LogoIcon from 'shared/assets/icons/logo.svg';
import { getRouteLogin, getRouteProfile } from 'shared/const/router';
import { Typography } from 'shared/ui/Typography/Typography';

import cls from './Logo.module.scss';

export const Logo = () => {
    const id = useSelector(getUserId);
    const navigate = useNavigate();
    const onLogoClick = useCallback(() => {
        if (id) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            navigate(getRouteProfile(String(id)));
        } else {
            navigate(getRouteLogin());
        }
    }, [id, navigate]);

    return (
        <div
            className={cls.logo}
            onClick={onLogoClick}
        >
            <LogoIcon className={cls.logoIcon} />
            <Typography
                size='medium'
                tag='h1'
                variant='primary'
                weight='medium'
            >
                CHAT APP
            </Typography>
        </div>
    );
};
