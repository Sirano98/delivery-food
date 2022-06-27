import { FC, ReactElement } from "react";
import { Navigate, useLocation } from "react-router-dom"
import { useAppSelector } from "../hooks/hooks";

interface RequireAuthProps {
    children: ReactElement
}

export const RequireAuth: FC<RequireAuthProps> = ({ children }) => {
    const location = useLocation();
    const user = useAppSelector(state => state.auth.login);

    if (!user) {
        return <Navigate to='/login' state={{ background: "/", from: location.pathname }} replace />
    }

    return children
}