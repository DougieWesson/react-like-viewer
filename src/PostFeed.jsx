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
          decreaseLikes={() => decreaseLikes(post.id)}
          removePost={() => removePost(post.id)}
        />
      );
    });
  };

  const removePost = (badPostID) => {
    const updated = posts.filter((post) => post.id !== badPostID);
    localStorage.setItem("postList", JSON.stringify(updated));
    changePosts(updated);
  };

  const increaseLikes = (id) => {
    const updated = posts.map((post) => {
      if (post.id === id) {
        return { id, content: post.content, likes: post.likes + 1 };
      }
      return post;
    });
    localStorage.setItem("postList", JSON.stringify(updated));
    changePosts(updated);
  };

  const decreaseLikes = (id) => {
    const updated = posts.map((post) => {
      if (post.id === id) {
        if (post.likes > 0) {
          return { id, content: post.content, likes: post.likes - 1 };
        }
      }
      return post;
    });
    localStorage.setItem("postList", JSON.stringify(updated));
    changePosts(updated);
  };

  return <div>{showPosts()}</div>;
}

export default PostFeed;
