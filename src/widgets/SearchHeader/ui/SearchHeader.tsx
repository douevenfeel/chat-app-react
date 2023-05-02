import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';

import { getSearchQ, getSearchSection, searchActions, SearchForm, fetchSearch } from 'entities/Search';
import { SearchSectionTitle } from 'shared/const/searchSections';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Typography } from 'shared/ui/Typography/Typography';

export const SearchHeader = memo(function SearchHeader() {
    const dispatch = useAppDispatch();
    const q = useSelector(getSearchQ);
    const section = useSelector(getSearchSection);
    const onSearchChange = useCallback(
        (value: string) => {
            dispatch(searchActions.setQ(value));
        },
        [dispatch]
    );
    const onSearchClick = useCallback(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchSearch(null));
        }
    }, [dispatch]);

    return (
        <div>
            {section && (
                <Typography
                    align='center'
                    size='medium'
                    tag='h1'
                    variant='primary'
                    weight='semi'
                >
                    {SearchSectionTitle[section]}
                </Typography>
            )}
            <SearchForm
                q={q}
                onSearchChange={onSearchChange}
                onSearchClick={onSearchClick}
            />
        </div>
    );
});
