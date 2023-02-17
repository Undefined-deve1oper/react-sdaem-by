import React from "react";

interface IWrapper {
    children: React.ReactChild | React.ReactNode;
    className: string;
}

const SectionWrapper: React.FC<IWrapper> = ({ children, className }) => {
    return (
        <section className={className}>
            <div className={className + "__container _container"}>
                {children}
            </div>
        </section>
    );
};

export default SectionWrapper;
