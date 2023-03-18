import { memo, useMemo } from 'react';
import { useSelector } from 'react-redux';

import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { getSidebarItems } from 'widgets/Sidebar/model/selectors/getSidebarItems/getSidebarItems';

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
        </div>
    );
});
