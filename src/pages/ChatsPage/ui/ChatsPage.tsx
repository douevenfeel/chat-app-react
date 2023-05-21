import type { ReactNode } from 'react';
import { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { chatsActions, chatsReducer, fetchAllChats } from 'entities/Chats';
import { getUserId } from 'entities/User';
import { AuthLayout } from 'layouts/AuthLayout';
import { getRouteChats } from 'shared/const/router';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import type { ReducersList } from 'shared/lib/hooks/useLazyModuleLoading/useLazyModuleLoading';
import { useLazyModuleLoading } from 'shared/lib/hooks/useLazyModuleLoading/useLazyModuleLoading';
import { useSocket } from 'shared/lib/hooks/useSocket/useSocket';
import { Chats } from 'widgets/Chats';

import cls from './ChatsPage.module.scss';

interface ChatsPageProps {
    children?: ReactNode;
}
const initialReducers: ReducersList = {
    chats: chatsReducer,
};

const ChatsPage = memo(function ChatsPage({ children }: ChatsPageProps) {
    useLazyModuleLoading({ reducers: initialReducers });
    const id = useSelector(getUserId);
    const socket = useSocket();
    const dispatch = useAppDispatch();
    const { pathname } = useLocation();
    let element;
    if (children) {
        element = children;
    } else {
        element = <Chats />;
    }
    useEffect(() => {
        document.title = 'Мессенджер';
        if (__PROJECT__ !== 'storybook') {
            pathname === getRouteChats() && dispatch(fetchAllChats(null));
        }
    }, [dispatch, pathname]);
    useEffect(() => {
        id && socket.emit('joinChats', id);
        socket.on('chats', (chats) => {
            dispatch(chatsActions.setData(chats));
        });

        return () => {
            id && socket.emit('leaveChats', id);
            socket.removeAllListeners();
        };
    }, [dispatch, id, socket]);

    return <AuthLayout className={cls.chatsPage}>{element}</AuthLayout>;
});

export default ChatsPage;
