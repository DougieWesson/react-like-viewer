import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import Container from "react-bootstrap/Container";
import PostAddForm from "./PostAddForm";
import PostFeed from "./PostFeed";
import { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";

function App() {
  const [posts, changePosts] = useState([]);

  const addPost = (content) => {
    const updated = [
      ...posts,
      {
        id: posts.length > 0 ? findGreatestID() + 1 : 0,
        content: content.content,
        likes: 0,
      },
    ];
    localStorage.setItem("postList", JSON.stringify(updated));
    changePosts(updated);
  };

  const findGreatestID = () => {
    const workingSortedPosts = [...posts].sort((a, b) => a.id - b.id);
    return workingSortedPosts[workingSortedPosts.length - 1].id;
  };

  useEffect(() => {
    const listContents = localStorage.getItem("postList");
    changePosts(JSON.parse(listContents) || []);
  }, []);

  return (
    <Container>
      <Navbar>
        <Navbar.Brand className="navBrand">Fak-E-Book</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/feed">
              Feed
            </Link>
            <Link className="nav-link" to="/add">
              Add Post
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes>
        <Route
          exact
          path="/"
          element={<PostFeed posts={posts} changePosts={changePosts} />}
        />
        <Route
          exact
          path="/feed"
          element={
            <PostFeed
              className="postFeed"
              posts={posts}
              changePosts={changePosts}
            />
          }
        />
        <Route exact path="/add" element={<PostAddForm addPost={addPost} />} />
      </Routes>
    </Container>
  );
}

export default App;
