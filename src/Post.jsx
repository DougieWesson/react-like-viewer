import "./Post.css";
import LikeCounter from "./LikeCounter";

function Post({ content, likes }) {
    return (
        <>
        <div className="post">
            <p>{content}</p>
            <LikeCounter likes={likes} />
        </div>
        </>
    )
}

export default Post;