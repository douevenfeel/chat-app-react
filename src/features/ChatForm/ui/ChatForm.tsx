import type { FormEvent } from 'react';
import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { chatActions } from 'entities/Chat';
import SendIcon from 'shared/assets/icons/send.svg';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button } from 'shared/ui/Button/Button';
import { Textarea } from 'shared/ui/Textarea/Textarea';

import { getChatMessage } from '../model/selectors/getChatMessage/getChatMessage';
import { fetchNewMessage } from '../model/services/fetchNewMessage/fetchNewMessage';
import { getFormattedMessage } from '../utils/getFormattedMessage/getFormattedMessage';

import cls from './ChatForm.module.scss';

export const ChatForm = () => {
    const dispatch = useAppDispatch();
    const message = useSelector(getChatMessage);

    const onSendClick = useCallback(() => {
        if (message) {
            if (__PROJECT__ !== 'storybook') {
                const formattedMessage = getFormattedMessage(message);
                const validMessage = formattedMessage.replaceAll('\n', '');
                validMessage && dispatch(fetchNewMessage(formattedMessage));
            }
        }
    }, [dispatch, message]);
    const handleEnterKey = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Enter') {
                onSendClick();
            }
        },
        [onSendClick]
    );
    const onInputChange = useCallback(
        (value: string) => {
            window.scrollTo({ top: document.body.scrollHeight });
            dispatch(chatActions.setMessage(value));
        },
        [dispatch]
    );
    const onSubmit = useCallback(
        (e: FormEvent) => {
            e.preventDefault();
            onSendClick();
        },
        [onSendClick]
    );
    useEffect(() => {
        document.addEventListener('keydown', handleEnterKey);

        return () => {
            document.removeEventListener('keydown', handleEnterKey);
        };
    }, [handleEnterKey]);

    return (
        <form
            className={cls.chatForm}
            onSubmit={onSubmit}
        >
            <Textarea
                autoFocus
                className={cls.textArea}
                placeholder='Напишите сообщение...'
                value={message}
                onChange={onInputChange}
            />
            <Button
                size='small'
                type='submit'
                variant='clean'
            >
                <SendIcon />
            </Button>
        </form>
    );
};
