import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { chatActions, chatReducer, getChatId, fetchChat } from 'entities/Chat';
import { ChatForm } from 'features/ChatForm';
import { AuthLayout } from 'layouts/AuthLayout';
import { getRouteChats } from 'shared/const/router';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import type { ReducersList } from 'shared/lib/hooks/useLazyModuleLoading/useLazyModuleLoading';
import { useLazyModuleLoading } from 'shared/lib/hooks/useLazyModuleLoading/useLazyModuleLoading';
import { useSocket } from 'shared/lib/hooks/useSocket/useSocket';
import { ChatHeader } from 'widgets/ChatHeader';
import { Messages } from 'widgets/Messages';

import cls from './ChatPage.module.scss';

const initialReducers: ReducersList = {
    chat: chatReducer,
};

const ChatPage = () => {
    useLazyModuleLoading({ reducers: initialReducers });
    const socket = useSocket();
    const dispatch = useAppDispatch();
    const { id } = useParams();
    const chatId = useSelector(getChatId);
    const navigate = useNavigate();
    const handleEscKey = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                navigate(getRouteChats());
            }
        },
        [navigate]
    );
    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            id && dispatch(fetchChat(+id));
        }
        document.addEventListener('keydown', handleEscKey);

        return () => {
            document.removeEventListener('keydown', handleEscKey);
        };
    }, [dispatch, handleEscKey, id]);
    useEffect(() => {
        socket.emit('joinChat', chatId);

        socket.on('message', (message) => {
            dispatch(chatActions.AddMessage(message));
        });

        return () => {
            socket.emit('leaveChat', chatId);
            socket.removeAllListeners();
        };
    }, [chatId, dispatch, socket]);

    return (
        <AuthLayout className={cls.chatPage}>
            <ChatHeader />
            <Messages className={cls.messages} />
            <ChatForm />
        </AuthLayout>
    );
};

export default ChatPage;
