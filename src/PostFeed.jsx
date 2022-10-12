import "./PostFeed.scss";
import Post from "./Post";

function PostFeed({ posts, changePosts }) {
  const showPosts = () => {
    return posts.map((post) => {
      return (
        <Post
          content={post.content}
          key={post.id}
          id={post.id}
          likes={post.likes}
          increaseLikes={() => increaseLikes(post.id)}
        />
      );
    });
  };

  const increaseLikes = (id) => {
    const updated = posts.map((post) => {
      if (post.id === id) {
        return { id, content: post.content, likes: post.likes + 1 };
      }
      return post;
    });
    changePosts(updated);
  };

  return <div>{showPosts()}</div>;
}

export default PostFeed;
