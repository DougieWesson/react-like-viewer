import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import PostAddForm from "./PostAddForm";
import PostFeed from "./PostFeed";
import { useState } from "react";

function App() {
  const [posts, changePosts] = useState([]);

  const addPost = (content) => {
    const updated = [...posts, { id: posts.length, content, likes: 0 }];
    changePosts(updated);
  };

  return (
    <Container>
      <PostAddForm addPost={addPost} />
      <PostFeed posts={posts} changePosts={changePosts} />
    </Container>
  );
}

export default App;
