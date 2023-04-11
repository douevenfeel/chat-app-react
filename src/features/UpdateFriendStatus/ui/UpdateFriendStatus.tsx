import { memo, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import type { FriendStatus } from 'shared/types/FriendStatus';
import { Button } from 'shared/ui/Button/Button';

import { fetchUpdateFriendStatus } from '../model/services/fetchUpdateFriendStatus/fetchUpdateFriendStatus';

interface UpdateFriendStatusProps {
    className?: string;
    id: number;
    friendStatus: FriendStatus;
}

const friendStatusTypography = {
    possibleFriend: 'Добавить в друзья',
    outcomingRequest: 'Отменить заявку',
    incomingRequest: 'Принять заявку',
    alreadyFriend: 'Удалить из друзей',
};

export const UpdateFriendStatus = memo(function UpdateFriendStatus({
    className,
    id,
    friendStatus,
}: UpdateFriendStatusProps) {
    const dispatch = useAppDispatch();
    const { pathname } = useLocation();
    const location = pathname.includes('profile') ? 'profile' : 'friends';
    const onUpdateFriendStatus = useCallback(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchUpdateFriendStatus({ id, location }));
        }
    }, [dispatch, id, location]);

    return (
        <Button
            className={className}
            size='small'
            variant='primary'
            onClick={onUpdateFriendStatus}
        >
            {friendStatusTypography[friendStatus]}
        </Button>
    );
});
