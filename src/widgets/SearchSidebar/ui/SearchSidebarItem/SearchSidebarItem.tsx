import { memo, useCallback } from 'react';

import { searchActions } from 'entities/Search';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button } from 'shared/ui/Button/Button';
import { Typography } from 'shared/ui/Typography/Typography';

import type { SearchSidebarSchema } from '../../model/types/SearchSidebarSchema';

import cls from './SearchSidebarItem.module.scss';

interface SearchSidebarItemProps extends SearchSidebarSchema {
    isActive?: boolean;
}

export const SearchSidebarItem = memo(function SearchSidebarItem({
    title,
    count,
    value,
    isActive,
}: SearchSidebarItemProps) {
    const dispatch = useAppDispatch();
    const onFriendStatusClick = useCallback(() => {
        !isActive && dispatch(searchActions.setSection(value));
    }, [dispatch, isActive, value]);

    return (
        <Button
            className={cls.searchSidebatItem}
            size='small'
            variant={isActive ? 'primary' : 'clean'}
            onClick={onFriendStatusClick}
        >
            <>
                <Typography
                    size='small'
                    tag='p'
                    variant='secondary'
                    weight='normal'
                >
                    {title}
                </Typography>
                <Typography
                    size='small'
                    tag='p'
                    variant='secondary'
                    weight='normal'
                >
                    {String(count)}
                </Typography>
            </>
        </Button>
    );
});
