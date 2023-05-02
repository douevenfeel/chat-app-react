import { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { fetchSearch, getSearchQ, getSearchSection, searchReducer } from 'entities/Search';
import { AuthLayout } from 'layouts/AuthLayout';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import type { ReducersList } from 'shared/lib/hooks/useLazyModuleLoading/useLazyModuleLoading';
import { useLazyModuleLoading } from 'shared/lib/hooks/useLazyModuleLoading/useLazyModuleLoading';
import { SearchHeader } from 'widgets/SearchHeader';
import { SearchSidebar } from 'widgets/SearchSidebar';

import { getSearchData } from '../../model/selectors/getSearchData/getSearchData';
import { useSearchElement } from '../../utils/hooks/useSearchElement/useSearchElement';

import cls from './SearchPage.module.scss';

const initialReducers: ReducersList = {
    search: searchReducer,
};

const SearchPage = memo(function SearchPage() {
    useLazyModuleLoading({ reducers: initialReducers });
    const dispatch = useAppDispatch();
    const q = useSelector(getSearchQ);
    const data = useSelector(getSearchData);
    const section = useSelector(getSearchSection);
    const element = useSearchElement(data, section);
    document.title = 'Поиск';
    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchSearch(null));
        }
    }, [dispatch, q, section]);

    return (
        <AuthLayout className={cls.searchPage}>
            <div className={cls.container}>
                <SearchHeader />
                {element}
            </div>
            <SearchSidebar />
        </AuthLayout>
    );
});

export default SearchPage;
