import type { ReactNode } from 'react';
import { memo, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { chatsReducer, fetchAllChats } from 'entities/Chats';
import { AuthLayout } from 'layouts/AuthLayout';
import { getRouteChats } from 'shared/const/router';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import type { ReducersList } from 'shared/lib/hooks/useLazyModuleLoading/useLazyModuleLoading';
import { useLazyModuleLoading } from 'shared/lib/hooks/useLazyModuleLoading/useLazyModuleLoading';
import { Chats } from 'widgets/Chats';

import cls from './ChatsPage.module.scss';

interface ChatsPageProps {
    children?: ReactNode;
}
const initialReducers: ReducersList = {
    chats: chatsReducer,
};

const ChatsPage = memo(function ChatsPage({ children }: ChatsPageProps) {
    const dispatch = useAppDispatch();
    useLazyModuleLoading({ reducers: initialReducers });
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

    return <AuthLayout className={cls.chatsPage}>{element}</AuthLayout>;
});

export default ChatsPage;
