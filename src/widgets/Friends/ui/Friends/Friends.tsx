import { memo } from 'react';
import { useSelector } from 'react-redux';

import { getFriendsData } from 'entities/Friends';
import { Typography } from 'shared/ui/Typography/Typography';

import { FriendItem } from '../FriendItem/FriendItem';

import cls from './Friends.module.scss';

export const Friends = memo(function Friends() {
    const data = useSelector(getFriendsData);

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
                    tag='p'
                    variant='primary'
                >
                    Ни одного друга не найдено
                </Typography>
            )}
        </div>
    );
});
