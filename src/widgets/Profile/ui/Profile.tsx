import type { ReactNode } from 'react';
import { useEffect, memo } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { fetchProfile, ProfileCard, profileReducer } from 'entities/Proflie';
import { AcceptFriendRequest } from 'features/AcceptFriendRequest';
import { AddFriend } from 'features/AddFriend';
import { CancelFriendRequest } from 'features/CancelFriendRequest';
import { DeleteFriend } from 'features/DeleteFriend';
import { EditProfile } from 'features/EditProfile';
import { SendMessage } from 'features/SendMessage';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import type { ReducersList } from 'shared/lib/hooks/useLazyModuleLoading/useLazyModuleLoading';
import { useLazyModuleLoading } from 'shared/lib/hooks/useLazyModuleLoading/useLazyModuleLoading';

import { getProfileData } from '../model/selectors/getProfileData/getProfileData';

const initialReducers: ReducersList = {
    profile: profileReducer,
};

export const Profile = memo(function Profile() {
    useLazyModuleLoading({ reducers: initialReducers });
    const dispatch = useAppDispatch();
    const { id } = useParams();
    const data = useSelector(getProfileData);
    let buttons: ReactNode[] = [];
    switch (data?.friendStatus) {
        case 'accept':
            buttons = [
                <SendMessage
                    id={Number(data.id)}
                    key='sendMessage'
                />,
                <AcceptFriendRequest
                    id={Number(data.id)}
                    key='acceptFriendRequest'
                />,
            ];
            break;
        case 'add':
            buttons = [
                <SendMessage
                    id={Number(data.id)}
                    key='sendMessage'
                />,
                <AddFriend
                    id={Number(data.id)}
                    key='addFriend'
                />,
            ];
            break;
        case 'cancel':
            buttons = [
                <SendMessage
                    id={Number(data.id)}
                    key='sendMessage'
                />,
                <CancelFriendRequest
                    id={Number(data.id)}
                    key='cancelFriendRequest'
                />,
            ];
            break;
        case 'delete':
            buttons = [
                <SendMessage
                    id={Number(data.id)}
                    key='sendMessage'
                />,
                <DeleteFriend
                    id={Number(data.id)}
                    key='deleteFriend'
                />,
            ];
            break;
        default:
            buttons = [<EditProfile key='editProfile' />];
            break;
    }
    useEffect(() => {
        id && dispatch(fetchProfile(id));
    }, [dispatch, id]);
    return (
        <ProfileCard
            buttons={buttons}
            data={data}
        />
    );
});
