import clsx from 'clsx';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';

import { friendsActions, getFriendsCounts, getFriendsFriendStatus } from 'entities/Friends';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import type { FriendStatus } from 'shared/types/FriendStatus';
import { Button } from 'shared/ui/Button/Button';

import cls from './FriendsChooseStatus.module.scss';

interface FriendsChooseStatusProps {
    className?: string;
}

export const FriendsChooseStatus = memo(function FriendsChooseStatus({ className }: FriendsChooseStatusProps) {
    const dispatch = useAppDispatch();
    const friendStatus = useSelector(getFriendsFriendStatus);
    const counts = useSelector(getFriendsCounts);
    const onFriendStatusClick = useCallback(
        (value: FriendStatus) => {
            dispatch(friendsActions.setFriendStatus(value));
        },
        [dispatch]
    );

    return (
        <div className={clsx(cls.friendsChooseStatus, className)}>
            {!!friendStatus && (
                <>
                    <Button
                        size='small'
                        variant={friendStatus === 'alreadyFriend' ? 'primary' : 'clean'}
                        onClick={() => onFriendStatusClick('alreadyFriend')}
                    >
                        Мои друзья {counts?.friends}
                    </Button>
                    <Button
                        size='small'
                        variant={friendStatus === 'outcomingRequest' ? 'primary' : 'clean'}
                        onClick={() => onFriendStatusClick('outcomingRequest')}
                    >
                        Исходящие заявки {counts?.outcomingRequests}
                    </Button>
                    <Button
                        size='small'
                        variant={friendStatus === 'incomingRequest' ? 'primary' : 'clean'}
                        onClick={() => onFriendStatusClick('incomingRequest')}
                    >
                        Входящие заявки {counts?.incomingRequests}
                    </Button>
                    <Button
                        size='small'
                        variant={friendStatus === 'possibleFriend' ? 'primary' : 'clean'}
                        onClick={() => onFriendStatusClick('possibleFriend')}
                    >
                        Поиск друзей
                    </Button>
                </>
            )}
        </div>
    );
});
