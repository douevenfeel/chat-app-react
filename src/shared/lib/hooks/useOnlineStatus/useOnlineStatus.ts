import dayjs, { locale, extend } from 'dayjs';
import ru from 'dayjs/locale/ru';
import relativeTime from 'dayjs/plugin/relativeTime';

export const useOnlineStatus = (isOnline?: boolean, lastSeen?: string) => {
    if (lastSeen) {
        if (!isOnline) {
            locale(ru);
            extend(relativeTime);
            const date = Date.now();
            if (date - +lastSeen > 300000) {
                return { online: false, lastSeen: `был(а) ${dayjs(+lastSeen).fromNow()}` };
            }
        }

        return { online: true, lastSeen: '' };
    }

    return { online: false, lastSeen: '' };
};
