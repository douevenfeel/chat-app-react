import { memo, useCallback } from 'react';

import { profileActions } from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button } from 'shared/ui/Button/Button';

interface ProfileUpdateProps {
    className?: string;
}

export const ProfileUpdate = memo(function ProfileUpdate({ className }: ProfileUpdateProps) {
    const dispatch = useAppDispatch();
    const onProfileUpdate = useCallback(() => {
        dispatch(profileActions.setIsUpdatingInfo(true));
    }, [dispatch]);

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
