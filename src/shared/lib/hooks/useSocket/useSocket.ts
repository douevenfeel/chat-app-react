import { useContext } from 'react';

import { SocketContext } from 'shared/lib/context/SocketContext';

export const useSocket = () => {
    const { socket } = useContext(SocketContext);

    return socket;
};
