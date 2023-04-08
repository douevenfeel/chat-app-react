import dayjs, { locale, extend } from 'dayjs';
import ru from 'dayjs/locale/ru';
import relativeTime from 'dayjs/plugin/relativeTime';

export const useOnlineStatus = (lastSeen?: string) => {
    if (lastSeen) {
        locale(ru);
        extend(relativeTime);
        const date = Date.now();
        if (date - +lastSeen > 300000) {
            return { online: false, lastSeen: `был(а) ${dayjs(+lastSeen).fromNow()}` };
        }

        return { online: true, lastSeen: '' };
    }

    return { online: false, lastSeen: '' };
};
