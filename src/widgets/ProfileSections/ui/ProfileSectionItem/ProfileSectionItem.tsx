import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from 'shared/ui/Button/Button';

import type { ProfileSectionSchema } from '../../model/types/ProfileSectionSchema';

type ProfileSectionItemProps = ProfileSectionSchema;

export const ProfileSectionItem = memo(function ProfileSectionItem({ link, title }: ProfileSectionItemProps) {
    const navigate = useNavigate();
    const onSectionClick = useCallback(() => {
        navigate(link);
    }, [link, navigate]);

    return (
        <Button
            size='small'
            variant='primary'
            onClick={onSectionClick}
        >
            {title}
        </Button>
    );
});
