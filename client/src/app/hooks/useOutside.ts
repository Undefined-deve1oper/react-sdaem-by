import { RefObject, useEffect, useState } from "react";

export default function useOutside<T>(ref: RefObject<T>) {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleOpen = () => {
        setIsOpen((prevState) => !prevState);
    };

    useEffect(() => {
        const handleClickOutsideDropdown = (e: MouseEvent) => {
            const path = e.composedPath();
            if (path[0] !== ref?.current) {
                setIsOpen(false);
            }
        };
        window.addEventListener("click", handleClickOutsideDropdown);
        return () => {
            window.removeEventListener("click", handleClickOutsideDropdown);
        };
    }, []);

    return {
        isOpen,
        handleOpen
    };
}
