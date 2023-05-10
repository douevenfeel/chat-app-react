import dayjs, { locale, extend } from 'dayjs';
import ru from 'dayjs/locale/ru';
import relativeTime from 'dayjs/plugin/relativeTime';

export const getOnlineStatus = (lastSeen?: string) => {
    if (lastSeen) {
        locale(ru);
        extend(relativeTime);
        const date = Date.now();
        if (date - +lastSeen > 300000) {
            return { online: false, lastSeenTime: `был(а) ${dayjs(+lastSeen).fromNow()}` };
        }

        return { online: true, lastSeenTime: '' };
    }

    return { online: false, lastSeenTime: '' };
};
