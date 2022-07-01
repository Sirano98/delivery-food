import { FC, ReactElement } from "react";
import { Navigate, useLocation } from "react-router-dom"
import { useAppSelector } from "../hooks/hooks";

interface RequireAuthProps {
    children: ReactElement
}

export const RequireAuth: FC<RequireAuthProps> = ({ children }) => {
    const location = useLocation();
    const email = useAppSelector(state => state.user.userData.email);

    if (!email) {
        return <Navigate to='/signUp' state={{ background: "/", from: location.pathname }} replace />
    }

    return children
}