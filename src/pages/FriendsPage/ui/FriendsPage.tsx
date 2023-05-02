import { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import {
    fetchFriends,
    friendsReducer,
    getFriendsData,
    getFriendsFriendStatus,
    getFriendsQ,
    getFriendsSection,
} from 'entities/Friends';
import { AuthLayout } from 'layouts/AuthLayout';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import type { ReducersList } from 'shared/lib/hooks/useLazyModuleLoading/useLazyModuleLoading';
import { useLazyModuleLoading } from 'shared/lib/hooks/useLazyModuleLoading/useLazyModuleLoading';
import { Typography } from 'shared/ui/Typography/Typography';
import { FriendsHeader } from 'widgets/FriendsHeader';
import { FriendsSidebar } from 'widgets/FriendsSidebar';
import { getFriendsProfile } from 'widgets/FriendsSidebar/model/selectors/getFriendsProfile/getFriendsProfile';
import { Users } from 'widgets/Users';

import cls from './FriendsPage.module.scss';

const initialReducers: ReducersList = {
    friends: friendsReducer,
};

const FriendsPage = memo(function FriendsPage() {
    useLazyModuleLoading({ reducers: initialReducers });
    const dispatch = useAppDispatch();
    const { id } = useParams();
    const data = useSelector(getFriendsData);
    const friendStatus = useSelector(getFriendsFriendStatus);
    const q = useSelector(getFriendsQ);
    const section = useSelector(getFriendsSection);
    const profile = useSelector(getFriendsProfile);
    let element;
    if (!!data && data.length > 0) {
        element = <Users data={data} />;
    } else {
        element = (
            <Typography
                align='center'
                size='medium'
                tag='h3'
                variant='primary'
                weight='normal'
            >
                Ни одного пользователя не найдено
            </Typography>
        );
    }
    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            id && dispatch(fetchFriends(+id));
        }
        document.title = `Друзья ${profile?.firstName} ${profile?.lastName}`;
    }, [dispatch, id, friendStatus, q, section, profile?.firstName, profile?.lastName]);

    return (
        <AuthLayout className={cls.friendsPage}>
            <div className={cls.container}>
                <FriendsHeader />
                {element}
            </div>
            <FriendsSidebar />
        </AuthLayout>
    );
});

export default FriendsPage;
