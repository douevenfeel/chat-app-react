import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import {
    fetchFriends,
    friendsActions,
    getFriendsCounts,
    getFriendsFriendStatus,
    getFriendsQ,
    getFriendsSection,
} from 'entities/Friends';
import type { FriendsSection } from 'entities/Friends';
import { SearchForm } from 'entities/Search';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button } from 'shared/ui/Button/Button';
import { Typography } from 'shared/ui/Typography/Typography';

import cls from './FriendsHeader.module.scss';

export const FriendsHeader = memo(function FriendsHeader() {
    const dispatch = useAppDispatch();
    const q = useSelector(getFriendsQ);
    const friendStatus = useSelector(getFriendsFriendStatus);
    const section = useSelector(getFriendsSection);
    const counts = useSelector(getFriendsCounts);
    const { id } = useParams();
    const onSearchChange = useCallback(
        (value: string) => {
            dispatch(friendsActions.setQ(value));
        },
        [dispatch]
    );
    const onSectionClick = useCallback(
        (value: FriendsSection) => {
            dispatch(friendsActions.setSection(value));
        },
        [dispatch]
    );

    const onSearchClick = useCallback(() => {
        if (__PROJECT__ !== 'storybook') {
            id && dispatch(fetchFriends(+id));
        }
    }, [dispatch, id]);
    let text = '';
    switch (friendStatus) {
        case 'alreadyFriend':
            text = 'Друзья';
            break;

        case 'outcomingRequest':
            text = 'Исходящие заявки';
            break;

        case 'incomingRequest':
            text = 'Входящие заявки';
            break;
    }

    return (
        <div className={cls.friendsHeader}>
            <Typography
                align='center'
                size='medium'
                tag='h1'
                variant='primary'
                weight='semi'
            >
                {text}
            </Typography>
            {friendStatus == 'alreadyFriend' && (
                <div className={cls.buttons}>
                    <Button
                        size='small'
                        variant={section === 'all' ? 'primary' : 'clean'}
                        onClick={() => onSectionClick('all')}
                    >
                        Все друзья {counts?.friends}
                    </Button>
                    <Button
                        size='small'
                        variant={section === 'online' ? 'primary' : 'clean'}
                        onClick={() => onSectionClick('online')}
                    >
                        Друзья в сети {counts?.onlineFriends}
                    </Button>
                </div>
            )}
            <SearchForm
                q={q}
                onSearchChange={onSearchChange}
                onSearchClick={onSearchClick}
            />
        </div>
    );
});
