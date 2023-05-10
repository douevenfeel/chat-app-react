import { memo, useCallback } from 'react';

import { friendsActions } from 'entities/Friends';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button } from 'shared/ui/Button/Button';
import { Typography } from 'shared/ui/Typography/Typography';

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
        !isActive && dispatch(friendsActions.setFriendStatus(value));
    }, [dispatch, isActive, value]);

    return (
        <Button
            className={cls.friendsSidebarItem}
            size='small'
            variant={isActive ? 'primary' : 'clean'}
            onClick={onFriendStatusClick}
        >
            <Typography
                size='small'
                tag='p'
                variant={isActive ? 'primary' : 'secondary'}
                weight='normal'
            >
                {title}
            </Typography>
            <Typography
                size='small'
                tag='p'
                variant={isActive ? 'primary' : 'secondary'}
                weight='normal'
            >
                {count}
            </Typography>
        </Button>
    );
});
