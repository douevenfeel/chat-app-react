import { memo, useCallback } from 'react';

import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button } from 'shared/ui/Button/Button';

import { fetchAcceptFriendRequest } from '../model/services/fetchAcceptFriendRequest/fetchAcceptFriendRequest';

interface AcceptFriendRequestProps {
    className?: string;
    id: number;
}

export const AcceptFriendRequest = memo(function AcceptFriendRequest({ className, id }: AcceptFriendRequestProps) {
    const dispatch = useAppDispatch();
    const onAcceptFriendRequest = useCallback(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchAcceptFriendRequest(id));
        }
    }, [dispatch, id]);

    return (
        <Button
            className={className}
            size='small'
            variant='primary'
            onClick={onAcceptFriendRequest}
        >
            Принять заявку
        </Button>
    );
});
