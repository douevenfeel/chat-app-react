import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

import { getUserId, getUserIsChecked } from 'entities/User';
import { getRouteLogin, getRouteProfile } from 'shared/const/router';
import { PageLoader } from 'widgets/PageLoader';

interface RequireAuthProps {
    children: JSX.Element;
    require: boolean;
}

export const RequireAuth = ({ children, require }: RequireAuthProps) => {
    const id = useSelector(getUserId);
    const isChecked = useSelector(getUserIsChecked);
    const location = useLocation();
    if (!isChecked) {
        return <PageLoader />;
    } else if (!id && require) {
        return (
            <Navigate
                replace
                state={{ from: location }}
                to={getRouteLogin()}
            />
        );
    } else if (id && !require) {
        return (
            <Navigate
                replace
                state={{ from: location }}
                to={getRouteProfile(String(id))}
            />
        );
    }

    return children;
};
