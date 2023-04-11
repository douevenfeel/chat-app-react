import { memo } from 'react';
import { useSelector } from 'react-redux';

import { getFriendsData, getFriendsFriendStatus } from 'entities/Friends';
import { Typography } from 'shared/ui/Typography/Typography';

import { FriendItem } from '../FriendItem/FriendItem';

import cls from './Friends.module.scss';

export const Friends = memo(function Friends() {
    const data = useSelector(getFriendsData);
    const friendStatus = useSelector(getFriendsFriendStatus);
    let text;
    switch (friendStatus) {
        case 'possibleFriend':
            text = 'Ни одного пользователя не найдено';
            break;
        case 'outcomingRequest':
            text = 'Нет исходящих заявок';
            break;
        case 'incomingRequest':
            text = 'Нет входящих заявок';
            break;
        case 'alreadyFriend':
            text = 'Ни одного друга не найдено';
            break;
    }

    return (
        <div className={cls.friends}>
            {data && data.length > 0 ? (
                data?.map((profile) => (
                    <FriendItem
                        key={profile.id}
                        profile={profile}
                    />
                ))
            ) : (
                <Typography
                    align='center'
                    size='medium'
                    tag='p'
                    variant='primary'
                >
                    {`${text}`}
                </Typography>
            )}
        </div>
    );
});
