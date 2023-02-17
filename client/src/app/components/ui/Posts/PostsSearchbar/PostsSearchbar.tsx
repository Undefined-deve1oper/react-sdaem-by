import React, { useState } from "react";
import Searchbar from "../../../common/Searchbar";

const PostsSearchbar: React.FC = () => {
    const [value, setValue] = useState("");

    const handleChange = (event: any) => {
        setValue(event.target.value);
    };

    return (
        <div className="posts-header__form">
            <Searchbar
                name="searchbar"
                value={value}
                onChange={handleChange}
                label="Поиск по статьям..."
            />
        </div>
    );
};

export default PostsSearchbar;
