import { memo, useCallback } from 'react';

import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button } from 'shared/ui/Button/Button';

import { fetchCancelFriendRequest } from '../model/services/fetchCancelFriendRequest/fetchCancelFriendRequest';

interface CancelFriendRequestProps {
    className?: string;
    id: number;
}

export const CancelFriendRequest = memo(function CancelFriendRequest({ className, id }: CancelFriendRequestProps) {
    const dispatch = useAppDispatch();
    const onCancelFriendRequest = useCallback(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchCancelFriendRequest(id));
        }
    }, [dispatch, id]);

    return (
        <Button
            className={className}
            size='small'
            variant='primary'
            onClick={onCancelFriendRequest}
        >
            Отменить заявку
        </Button>
    );
});
