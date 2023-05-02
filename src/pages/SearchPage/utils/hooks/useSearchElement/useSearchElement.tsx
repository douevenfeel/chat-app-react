import type { SearchData, SearchSection } from 'entities/Search';
import { SearchItem } from 'pages/SearchPage/ui/SearchItem/SearchItem';
import { SearchSectionTitle } from 'shared/const/searchSections';
import { Typography } from 'shared/ui/Typography/Typography';
import { Users } from 'widgets/Users';

export const useSearchElement = (data?: SearchData, section?: SearchSection) => {
    const items = [];
    let element;
    switch (section) {
        case 'all':
            if (data) {
                data.users.length > 0 &&
                    items.push({
                        children: <Users data={data.users} />,
                        section: 'users',
                        title: SearchSectionTitle['users'],
                    });
                element = items.map((item) => (
                    <SearchItem
                        key={item.section}
                        section={item.section as SearchSection}
                    >
                        {item.children}
                    </SearchItem>
                ));
            }
            break;
        case 'communities':
            if (!!data && data?.communities.length > 0) {
                element = null;
            } else {
                element = (
                    <Typography
                        align='center'
                        size='medium'
                        tag='h3'
                        variant='primary'
                        weight='normal'
                    >
                        Ни одного сообщества не найдено
                    </Typography>
                );
            }
            break;
        case 'musics':
            if (!!data && data?.musics.length > 0) {
                element = null;
            } else {
                element = (
                    <Typography
                        align='center'
                        size='medium'
                        tag='h3'
                        variant='primary'
                        weight='normal'
                    >
                        Ни одной аудиозаписи не найдено
                    </Typography>
                );
            }
            break;
        case 'posts':
            if (!!data && data?.posts.length > 0) {
                element = null;
            } else {
                element = (
                    <Typography
                        align='center'
                        size='medium'
                        tag='h3'
                        variant='primary'
                        weight='normal'
                    >
                        Ни одной новости не найдено
                    </Typography>
                );
            }
            break;
        case 'users':
            if (!!data && data?.users.length > 0) {
                element = <Users data={data?.users} />;
            } else {
                element = (
                    <Typography
                        align='center'
                        size='medium'
                        tag='h3'
                        variant='primary'
                        weight='normal'
                    >
                        Ни одного пользователя не найдено
                    </Typography>
                );
            }
            break;
        case 'videos':
            if (!!data && data?.videos.length > 0) {
                element = null;
            } else {
                element = (
                    <Typography
                        align='center'
                        size='medium'
                        tag='h3'
                        variant='primary'
                        weight='normal'
                    >
                        Ни одной видеозаписи не найдено
                    </Typography>
                );
            }
            break;
        default:
            element = null;
    }

    return element;
};
