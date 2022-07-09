import { getAuth } from "firebase/auth";
import { FC, ReactElement } from "react";
import { Navigate, useLocation } from "react-router-dom"

interface RequireAuthProps {
    children: ReactElement
}

export const RequireAuth: FC<RequireAuthProps> = ({ children }) => {
    const location = useLocation();
    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) {
        return <Navigate to='/signUp' state={{ background: "/", from: location.pathname }} replace />
    }

    return children
}