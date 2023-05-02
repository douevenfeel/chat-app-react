import type { ReactNode } from 'react';
import { useCallback, memo } from 'react';

import type { SearchSection } from 'entities/Search';
import { searchActions } from 'entities/Search';
import { SearchSectionTitle } from 'shared/const/searchSections';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button } from 'shared/ui/Button/Button';
import { Typography } from 'shared/ui/Typography/Typography';

import cls from './SearchItem.module.scss';

interface SearchItemProps {
    children: ReactNode;
    section: SearchSection;
}

export const SearchItem = memo(function SearchItem({ children, section }: SearchItemProps) {
    const dispatch = useAppDispatch();
    const onSectionClick = useCallback(() => {
        dispatch(searchActions.setSection(section));
    }, [dispatch, section]);

    return (
        <div className={cls.searchItem}>
            <Typography
                className={cls.title}
                size='medium'
                tag='p'
                variant='primary'
            >
                {SearchSectionTitle[section]}
            </Typography>
            {children}
            <Button
                className={cls.button}
                size='small'
                variant='primary'
                onClick={onSectionClick}
            >
                Показать все
            </Button>
        </div>
    );
});
