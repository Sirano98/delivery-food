import { FC, ReactElement, useEffect, useMemo } from "react";
import { createPortal } from "react-dom";


interface ModalProps {
    children: ReactElement
}

const modalRootElement = document.getElementById("root-modal");

export const Modal: FC<ModalProps> = ({ children }) => {
    const element = useMemo(() => document.createElement("div"), []);

    useEffect(() => {
        modalRootElement?.appendChild(element);

        return () => {
            modalRootElement?.removeChild(element)
        }
    })
    return createPortal(
        children,
        element
    )
}