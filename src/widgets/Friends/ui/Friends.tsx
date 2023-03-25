import { memo } from 'react';
import { useSelector } from 'react-redux';

import { getFriendsData } from 'entities/Friends';
import { ProfileCardMedium } from 'entities/Profile';
import { SendMessage } from 'features/SendMessage';

import cls from './Friends.module.scss';

export const Friends = memo(function Friends() {
    const data = useSelector(getFriendsData);

    return (
        <div className={cls.friends}>
            {data?.map((profile) => (
                <ProfileCardMedium
                    data={profile}
                    key={profile.id}
                    options={<SendMessage id={profile.id} />}
                />
            ))}
        </div>
    );
});
