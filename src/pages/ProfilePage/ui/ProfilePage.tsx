import { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { fetchProfile, profileReducer } from 'entities/Proflie';
import { AuthLayout } from 'layouts/AuthLayout';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import type { ReducersList } from 'shared/lib/hooks/useLazyModuleLoading/useLazyModuleLoading';
import { useLazyModuleLoading } from 'shared/lib/hooks/useLazyModuleLoading/useLazyModuleLoading';
import { NotFound } from 'widgets/NotFound';
import { Profile } from 'widgets/Profile';

import { getProfileError } from '../model/selectors/getProfileError/getProfileError';

const initialReducers: ReducersList = {
    profile: profileReducer,
};
const ProfilePage = memo(function ProfilePage() {
    useLazyModuleLoading({ reducers: initialReducers });
    const dispatch = useAppDispatch();
    const { id } = useParams();
    const error = useSelector(getProfileError);
    let element;
    if (error) {
        element = <NotFound />;
    } else {
        element = <Profile />;
    }
    useEffect(() => {
        id && dispatch(fetchProfile(id));
    }, [dispatch, id]);

    return <AuthLayout>{element}</AuthLayout>;
});

export default ProfilePage;
