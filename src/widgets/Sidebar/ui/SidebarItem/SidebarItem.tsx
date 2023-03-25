import { memo, useCallback } from 'react';

import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Text } from 'shared/ui/Text/Text';

import type { SidebarItemSchema } from '../../model/types/SidebarItemSchema';

import cls from './SidebarItem.module.scss';

type SidebarItemProps = SidebarItemSchema;

export const SidebarItem = memo(function SidebarItem({ path, Icon, text }: SidebarItemProps) {
    const onLinkClick = useCallback(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <AppLink
            className={cls.sidebarItem}
            to={path}
            onClick={onLinkClick}
        >
            <Icon className={cls.icon} />
            <Text
                className={cls.text}
                size='small'
                tag='p'
                variant='secondary'
            >
                {text}
            </Text>
        </AppLink>
    );
});
