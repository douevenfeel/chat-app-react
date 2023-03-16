import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { getRouteEditProfile } from 'shared/const/router';
import { Button } from 'shared/ui/Button/Button';

interface EditProfileProps {
    className?: string;
}

export const EditProfile = memo(function EditProfile({ className }: EditProfileProps) {
    const navigate = useNavigate();
    const onEditProfile = useCallback(() => {
        navigate(getRouteEditProfile());
    }, [navigate]);

    return (
        <Button
            className={className}
            size='small'
            variant='primary'
            onClick={onEditProfile}
        >
            Редактировать
        </Button>
    );
});
