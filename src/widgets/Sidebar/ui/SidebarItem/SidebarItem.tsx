import { memo } from 'react';

import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Text } from 'shared/ui/Text/Text';
import type { SidebarItemSchema } from 'widgets/Sidebar/model/types/SidebarItemSchema';

import cls from './SidebarItem.module.scss';

type SidebarItemProps = SidebarItemSchema;

export const SidebarItem = memo(function SidebarItem({ path, Icon, text }: SidebarItemProps) {
    return (
        <AppLink
            className={cls.sidebarItem}
            to={path}
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
