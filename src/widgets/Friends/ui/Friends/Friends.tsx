import { memo } from 'react';
import { useSelector } from 'react-redux';

import { getFriendsData } from 'entities/Friends';
import { Text } from 'shared/ui/Text/Text';

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
                <Text
                    align='center'
                    tag='p'
                    variant='primary'
                >
                    Ни одного друга не найдено
                </Text>
            )}
        </div>
    );
});
