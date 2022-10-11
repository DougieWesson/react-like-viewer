import "./PostFeed.css";
import Post from "./Post";

function PostFeed() {

    const posts = [
        {
            content: "I like dogs!",
            likes: 0,
        },
        {
            content: "I like cats!",
            likes: 0,
        },
        {
            content: "I like BOTH!",
            likes: 0,
        },
    ];

    const showPosts = () => {
        return posts.map((post) => {
            return (
            <Post content={post.content} likes={post.likes} />
            )
        })
    }

    return (
        <>
        <div>
            {showPosts()}
        </div>
        </>
    )
}

export default PostFeed;