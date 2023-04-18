import clsx from 'clsx';
import { memo, useMemo } from 'react';
import { useSelector } from 'react-redux';

import { getFriendsFriendStatus } from 'entities/Friends';
import { NavigateToProfile } from 'features/NavigateToProfile';

import { getFriendsProfile } from '../../model/selectors/getFriendsProfile/getFriendsProfile';
import { getFriendsSidebarItems } from '../../model/selectors/getFriendsSidebarItems/getFriendsSidebarItems';
import { FriendsSidebarItem } from '../FriendsSidebarItem/FriendsSidebarItem';

import cls from './FriendsSidebar.module.scss';

interface FriendsSidebarProps {
    className?: string;
}

export const FriendsSidebar = memo(function FriendsSidebar({ className }: FriendsSidebarProps) {
    const friendStatus = useSelector(getFriendsFriendStatus);
    const profile = useSelector(getFriendsProfile);

    const friendsSidebarItems = useSelector(getFriendsSidebarItems);
    const itemsList = useMemo(
        () =>
            friendsSidebarItems.map((item) => (
                <FriendsSidebarItem
                    count={item.count}
                    isActive={friendStatus == item.value}
                    key={item.value}
                    title={item.title}
                    value={item.value}
                />
            )),
        [friendStatus, friendsSidebarItems]
    );
    if (!profile) {
        return <></>;
    }

    return (
        <div className={clsx(cls.friendsSidebar, className)}>
            <NavigateToProfile {...profile} />
            <div className={cls.friendsStatus}>{itemsList}</div>
        </div>
    );
});
