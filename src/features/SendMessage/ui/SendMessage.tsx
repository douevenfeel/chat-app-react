import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { getRouteConversation } from 'shared/const/router';
import { Button } from 'shared/ui/Button/Button';

interface SendMessageProps {
    className?: string;
    id: number;
}

export const SendMessage = memo(function SendMessage({ className, id }: SendMessageProps) {
    const navigate = useNavigate();
    const onSendMessage = useCallback(() => {
        navigate(getRouteConversation(String(id)));
    }, [id, navigate]);

    return (
        <Button
            className={className}
            size='small'
            variant='primary'
            onClick={onSendMessage}
        >
            Сообщение
        </Button>
    );
});
