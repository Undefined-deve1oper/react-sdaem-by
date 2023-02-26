import React, { useEffect, useState } from "react";

type Props = {
    value: number;
};

const ProgressBar: React.FC<Props> = ({ value }) => {
    const [progressStyle, setProgressStyle] = useState({});

    useEffect(() => {
        const timeout = setTimeout(() => {
            const style = {
                opacity: 1,
                width: `${value}%`
            };

            setProgressStyle(style);
        }, 250);
        return () => {
            clearTimeout(timeout);
        };
    }, [value]);

    return (
        <div className="progress">
            <span className="progress__done" style={progressStyle}></span>
        </div>
    );
};

export default ProgressBar;
