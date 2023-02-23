import { RefObject, useCallback, useEffect, useState } from "react";

export default function useOutside<T>(ref: RefObject<T>) {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleOpen = () => {
        setIsOpen((prevState) => !prevState);
    };

    const handleClickOutsideDropdown = useCallback((e: MouseEvent) => {
        const path = e.composedPath();
        if (path[0] !== ref?.current) {
            setIsOpen(false);
        }
    }, []);

    useEffect(() => {
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
