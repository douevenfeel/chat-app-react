import { memo, useCallback } from 'react';

import { friendsActions } from 'entities/Friends';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button } from 'shared/ui/Button/Button';

import type { FriendsSidebarSchema } from '../../model/types/FriendsSidebarSchema';

import cls from './FriendsSidebarItem.module.scss';

interface FriendsSidebarItemProps extends FriendsSidebarSchema {
    isActive?: boolean;
}

export const FriendsSidebarItem = memo(function FriendsSidebarItem({
    title,
    count,
    value,
    isActive,
}: FriendsSidebarItemProps) {
    const dispatch = useAppDispatch();
    const onFriendStatusClick = useCallback(() => {
        dispatch(friendsActions.setFriendStatus(value));
    }, [dispatch, value]);

    return (
        <Button
            className={cls.friendsSidebarItem}
            size='small'
            variant={isActive ? 'primary' : 'clean'}
            onClick={onFriendStatusClick}
        >
            <span>{title}</span>
            <span>{count}</span>
        </Button>
    );
});
