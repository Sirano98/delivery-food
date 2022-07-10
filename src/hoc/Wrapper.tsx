import { FC, ReactElement, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

interface WrapperProps {
    children: ReactElement
}

export const Wrapper: FC<WrapperProps> = ({ children }) => {
    const location = useLocation();

    useLayoutEffect(() => {

        console.log(location);
        if (!location.state) {
            console.log(location);
            document.documentElement.scrollTo(0, 0);
        }

    }, [location.state]);

    return children;
}