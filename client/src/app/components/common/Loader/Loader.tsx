import React from "react";
import { Circles } from "react-loader-spinner";

interface IPropsLoader {
    visible?: boolean;
}

const Loader: React.FC<IPropsLoader> = ({ visible }) => {
    return (
        <Circles
            color="#9d94ff"
            wrapperClass={"loader"}
            height={100}
            width={100}
            visible={visible}
        />
    );
};

export default React.memo(Loader);
