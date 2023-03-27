import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import {
    fetchFriends,
    friendsActions,
    getFriendsCounts,
    getFriendsFriendStatus,
    getFriendsSearch,
    getFriendsSection,
} from 'entities/Friends';
import type { FriendsSection } from 'entities/Friends';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text } from 'shared/ui/Text/Text';

import cls from './FriendsHeader.module.scss';

export const FriendsHeader = memo(function FriendsHeader() {
    const dispatch = useAppDispatch();
    const search = useSelector(getFriendsSearch);
    const friendStatus = useSelector(getFriendsFriendStatus);
    const section = useSelector(getFriendsSection);
    const counts = useSelector(getFriendsCounts);
    const { id } = useParams();
    const onSearchChange = useCallback(
        (value: string) => {
            dispatch(friendsActions.setSearch(value));
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
            text = 'Мои друзья';
            break;

        case 'outcomingRequest':
            text = 'Исходящие заявки';
            break;

        case 'incomingRequest':
            text = 'Входящие заявки';
            break;

        case 'possibleFriend':
            text = 'Поиск друзей';
            break;
    }

    return (
        <div className={cls.friendsHeader}>
            <Text
                align='center'
                size='medium'
                tag='h1'
                variant='primary'
                weight='semi'
            >
                {text}
            </Text>
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
            <div className={cls.search}>
                <Input
                    placeholder='Введите запрос'
                    size='small'
                    value={search}
                    variant='outline'
                    onChange={onSearchChange}
                />
                <Button
                    size='small'
                    variant='primary'
                    onClick={onSearchClick}
                >
                    Поиск
                </Button>
            </div>
        </div>
    );
});
