import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { getProfileSectionItems } from '../../model/selectors/getProfileSectionItems/getProfileSectionItems';
import { ProfileSectionItem } from '../ProfileSectionItem/ProfileSectionItem';

export const ProfileSections = () => {
    const profileSectionItems = useSelector(getProfileSectionItems);
    const itemsList = useMemo(
        () =>
            profileSectionItems.map((item) => (
                <ProfileSectionItem
                    key={item.link}
                    link={item.link}
                    title={item.title}
                />
            )),
        [profileSectionItems]
    );

    return <div>{itemsList}</div>;
};
