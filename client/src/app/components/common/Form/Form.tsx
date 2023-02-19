import React, { PropsWithChildren, ReactElement } from "react";

type FormType = {
    data: {
        [key: string]: any;
    };
    errors?: {
        [key: string]: any;
    };
    children?: React.ReactNode;
    className?: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleKeyDown?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

type FormItemPropsType = {
    data?: {
        [key: string]: any;
    };
    props?: {
        [key: string]: any;
    };
    name: string;
    error?: string;
    value?: string;
    type?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyDown?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function Form({
    data,
    errors,
    children,
    handleChange,
    handleKeyDown,
    className,
    ...rest
}: FormType) {
    const clonedElements = React.Children.map(children, (child) => {
        const item = child as ReactElement<
            PropsWithChildren<FormItemPropsType>
        >;
        const childType = typeof item;
        let config: FormItemPropsType = { name: "" };

        if (
            childType === "object" ||
            (childType === "function" &&
                item.props.type !== "submit" &&
                item.props.type !== "button")
        ) {
            config = {
                ...item.props,
                onChange: handleChange,
                value: data[item.props.name],
                error: errors?.[item.props.name],
                onKeyDown: handleKeyDown
            };
        }
        return React.cloneElement(item, config);
    });

    return (
        <form className={className || "form"} {...rest}>
            {clonedElements}
        </form>
    );
}

export default Form;
