import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { profileActions } from 'entities/Profile';
import { getUserId } from 'entities/User';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button } from 'shared/ui/Button/Button';

interface ProfileUpdateProps {
    className?: string;
}

export const ProfileUpdate = memo(function ProfileUpdate({ className }: ProfileUpdateProps) {
    const dispatch = useAppDispatch();
    const id = useSelector(getUserId);
    const { id: profileId } = useParams();
    const onProfileUpdate = useCallback(() => {
        id === Number(profileId) && dispatch(profileActions.setIsUpdatingInfo(true));
    }, [dispatch, id, profileId]);

    return (
        <Button
            className={className}
            size='small'
            variant='primary'
            onClick={onProfileUpdate}
        >
            Редактировать
        </Button>
    );
});
