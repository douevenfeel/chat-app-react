import type { ReactNode } from 'react';
import { memo } from 'react';

import cls from './Overlay.module.scss';

interface OverlayProps {
    children: ReactNode;
    onClick: () => void;
}

export const Overlay = memo(function Overlay({ children, onClick }: OverlayProps) {
    return (
        <div
            className={cls.overlay}
            onClick={onClick}
        >
            {children}
        </div>
    );
});
