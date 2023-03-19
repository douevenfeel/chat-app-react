import clsx from 'clsx';
import type { MouseEvent, ReactNode } from 'react';
import { useEffect, memo } from 'react';

import { useTheme } from 'shared/lib/hooks/useTheme/useTheme';

import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';

import cls from './Modal.module.scss';

interface ModalProps {
    className?: string;
    children: ReactNode;
    isOpen: boolean;
    onClose: () => void;
}

export const Modal = memo(function Modal({ className, children, isOpen, onClose }: ModalProps) {
    const { theme } = useTheme();
    const onContentClick = (e: MouseEvent) => {
        e.stopPropagation();
    };

    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        } else {
            window.removeEventListener('keydown', onKeyDown);
        }
    }, [onClose, isOpen]);

    return (
        <Portal>
            <div className={clsx(cls.modal, `${theme}Theme`, isOpen && cls.opened)}>
                <Overlay onClick={onClose}>
                    <div
                        className={clsx(cls.content, className)}
                        onClick={onContentClick}
                    >
                        {children}
                    </div>
                </Overlay>
            </div>
        </Portal>
    );
});
