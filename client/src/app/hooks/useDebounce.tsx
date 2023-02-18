import { useEffect, useState } from "react";

export default function useDebounce<T>(value: T, delay?: number): T {
    const [debounce, setDebounce] = useState<T>(value);

    useEffect(() => {
        const time = setTimeout(() => {
            setDebounce(value);
        }, delay || 600);

        return () => {
            clearTimeout(time);
        };
    }, [value, delay]);

    return debounce;
}
