import type { ReactNode } from 'react';
import { io } from 'socket.io-client';

import { SocketContext } from 'shared/lib/context/SocketContext';

interface SockerProviderProps {
    children: ReactNode;
}

export const SocketProvider = ({ children }: SockerProviderProps) => {
    const socket = io('http://localhost:5001', {
        autoConnect: true,
        withCredentials: false,
        transports: ['websocket'],
    });

    return <SocketContext.Provider value={{ socket }}>{children}</SocketContext.Provider>;
};
