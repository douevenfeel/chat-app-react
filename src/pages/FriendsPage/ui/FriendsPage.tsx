import { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import {
    fetchFriends,
    friendsReducer,
    getFriendsFriendStatus,
    getFriendsSearch,
    getFriendsSection,
} from 'entities/Friends';
import { FriendsChooseStatus } from 'features/FriendsChooseStatus';
import { FriendsHeader } from 'features/FriendsHeader';
import { AuthLayout } from 'layouts/AuthLayout';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import type { ReducersList } from 'shared/lib/hooks/useLazyModuleLoading/useLazyModuleLoading';
import { useLazyModuleLoading } from 'shared/lib/hooks/useLazyModuleLoading/useLazyModuleLoading';
import { Friends } from 'widgets/Friends';

import cls from './FriendsPage.module.scss';

const initialReducers: ReducersList = {
    friends: friendsReducer,
};

const FriendsPage = memo(function FriendsPage() {
    useLazyModuleLoading({ reducers: initialReducers });
    const dispatch = useAppDispatch();
    const { id } = useParams();
    const friendStatus = useSelector(getFriendsFriendStatus);
    const search = useSelector(getFriendsSearch);
    const section = useSelector(getFriendsSection);
    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            id && dispatch(fetchFriends(+id));
        }
        document.title = 'Друзья';
    }, [dispatch, id, friendStatus, search, section]);

    return (
        <AuthLayout className={cls.friendsPage}>
            <div className={cls.container}>
                <FriendsHeader />
                <Friends />
            </div>
            <FriendsChooseStatus />
        </AuthLayout>
    );
});

export default FriendsPage;
