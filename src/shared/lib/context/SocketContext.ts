import { createContext } from 'react';
import type { Socket } from 'socket.io-client';

interface SocketContextProps {
    socket: Socket;
}

export const SocketContext = createContext<SocketContextProps>({} as SocketContextProps);
