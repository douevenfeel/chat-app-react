import { memo, useCallback } from 'react';

import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button } from 'shared/ui/Button/Button';

import { fetchAddFriend } from '../model/services/fetchAddFriend/fetchAddFriend';

interface AddFriendProps {
    className?: string;
    id: number;
}

export const AddFriend = memo(function AddFriend({ className, id }: AddFriendProps) {
    const dispatch = useAppDispatch();
    const onAddFriend = useCallback(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchAddFriend(id));
        }
    }, [dispatch, id]);

    return (
        <Button
            className={className}
            size='small'
            variant='primary'
            onClick={onAddFriend}
        >
            Добавить в друзья
        </Button>
    );
});
