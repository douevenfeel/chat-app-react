import { memo, useMemo } from 'react';
import { useSelector } from 'react-redux';

import { Logout } from 'features/Logout';
import { ThemeSwitcher } from 'features/ThemeSwitcher';

import { getSidebarItems } from '../../model/selectors/getSidebarItems/getSidebarItems';
import { SidebarItem } from '../SidebarItem/SidebarItem';

import cls from './Sidebar.module.scss';

export const Sidebar = memo(function Sidebar() {
    const sidebarItemsList = useSelector(getSidebarItems);
    const itemsList = useMemo(
        () =>
            sidebarItemsList.map((item) => (
                <SidebarItem
                    {...item}
                    key={item.path}
                />
            )),
        [sidebarItemsList]
    );

    return (
        <div className={cls.sidebar}>
            {itemsList}
            <ThemeSwitcher />
            <Logout className={cls.logout} />
        </div>
    );
});
