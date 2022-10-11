import "./PostFeed.css";
import Post from "./Post";
import { useState } from "react";

function PostFeed() {
  const fakePosts = [
    {
      content: "I like dogs!",
      id: 0,
      likes: 0,
    },
    {
      content: "I like cats!",
      id: 1,
      likes: 0,
    },
    {
      content: "I like BOTH!",
      id: 2,
      likes: 0,
    },
  ];

  const [posts, addLikes] = useState([...fakePosts])

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
    console.log("I was clicked");
    const updated = posts.map((post) => {
        if(post.id === id) {
            return {id, content: post.content, likes: post.likes + 1};
        }
        return post;
    })
    addLikes(updated);
  };

  return (
    <>
      <div>{showPosts()}</div>
    </>
  );
}

export default PostFeed;
