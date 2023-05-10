import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { ChatCard } from 'entities/Chats/ui/ChatCard/ChatCard';
import { getRouteChat } from 'shared/const/router';
import type { Message } from 'shared/types/Message';
import type { User } from 'shared/types/User';

interface ChatItemProps {
    user: User;
    message: Message;
}

export const ChatItem = memo(function ChatItem({ user, message }: ChatItemProps) {
    const navigate = useNavigate();
    const onChatClick = useCallback(() => {
        user && navigate(getRouteChat(String(user?.id)));
    }, [navigate, user]);

    return (
        <ChatCard
            message={message}
            user={user}
            onClick={onChatClick}
        />
    );
});
