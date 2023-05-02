import { memo, useMemo } from 'react';
import { useSelector } from 'react-redux';

import { getSearchSection } from 'entities/Search';

import { getSearchSidebarItems } from '../../model/selectors/getSearchSidebarItems/getSearchSidebarItems';
import { SearchSidebarItem } from '../SearchSidebarItem/SearchSidebarItem';

import cls from './SearchSidebar.module.scss';

export const SearchSidebar = memo(function SearchSidebar() {
    const section = useSelector(getSearchSection);
    const searchSidebarItems = useSelector(getSearchSidebarItems);
    const itemsList = useMemo(
        () =>
            searchSidebarItems.map((item) => (
                <SearchSidebarItem
                    count={item.count}
                    isActive={section === item.value}
                    key={item.value}
                    title={item.title}
                    value={item.value}
                />
            )),
        [searchSidebarItems, section]
    );

    return <div className={cls.searchSidebar}>{itemsList}</div>;
});
