import React from "react";
import { PostItem } from "../../../../store";
import PostCard from "../PostCard";

interface IPostsList {
    items: PostItem[];
}

const PostsList: React.FC<IPostsList> = ({ items, ...rest }) => {
    return (
        <>
            <ul className="posts__list posts-list">
                {items.map((item: PostItem) => (
                    <li className="posts-list__item" key={item._id}>
                        <PostCard item={item} {...rest} />
                    </li>
                ))}
            </ul>
        </>
    );
};

export default PostsList;
