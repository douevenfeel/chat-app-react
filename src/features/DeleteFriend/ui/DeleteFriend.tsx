import { memo, useCallback } from 'react';

import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button } from 'shared/ui/Button/Button';

import { fetchDeleteFriend } from '../model/services/fetchDeleteFriend/fetchDeleteFriend';

interface DeleteFriendProps {
    className?: string;
    id: number;
}

export const DeleteFriend = memo(function DeleteFriend({ className, id }: DeleteFriendProps) {
    const dispatch = useAppDispatch();
    const onDeleteFriend = useCallback(() => {
        dispatch(fetchDeleteFriend(id));
    }, [dispatch, id]);

    return (
        <Button
            className={className}
            size='small'
            variant='primary'
            onClick={onDeleteFriend}
        >
            Удалить из друзей
        </Button>
    );
});
