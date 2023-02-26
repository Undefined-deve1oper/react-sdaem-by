import React, { useState } from "react";
import StarRatingLabel from "./StarRatingLabel";
import StarsList from "./StarsList";

interface IRating {
    defaultState: string;
    emptyColor?: string;
    fillColor?: string;
    height?: number;
    labelText?: string;
    maxValue?: number;
    onChangeHover?: (value: any) => void;
    onChange?: (value: any) => void;
    readOnly?: boolean;
    width?: number;
    name: string;
    error?: string | null;
}

export const RatingContext = React.createContext({});

const Rating: React.FC<IRating> = ({
    defaultState,
    emptyColor,
    fillColor,
    height,
    labelText,
    maxValue,
    onChangeHover,
    onChange,
    readOnly,
    width,
    error,
    name
}) => {
    const [rating, setRating] = useState<string>(defaultState || "");
    const [hover, setHover] = useState<any>(null);

    const setRatingFn = (value: string) => {
        if (readOnly) return;

        setRating(value);
        onChange?.({ target: { name, value } });
    };

    const setHoverFn = (value: any) => {
        if (readOnly) return;

        setHover(value);
        onChangeHover?.(value);
    };

    return (
        <RatingContext.Provider
            value={{
                emptyColor,
                fillColor,
                height,
                hover,
                labelText,
                rating,
                setHover: setHoverFn,
                setRating: setRatingFn,
                width,
                maxValue
            }}
        >
            <div className="rating">
                {labelText && <StarRatingLabel />}
                <StarsList />
                {error && <p className="text-field__error error">{error}</p>}
            </div>
        </RatingContext.Provider>
    );
};

Rating.defaultProps = {
    defaultState: "0",
    emptyColor: "#bdbdbd",
    fillColor: "#664ef9",
    height: 30,
    maxValue: 5,
    readOnly: false,
    width: 30
};

export default Rating;
