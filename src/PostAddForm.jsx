import { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

function PostAddForm({ addPost }) {
  const [contentValue, changeContentValue] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
    changeContentValue(event.target.value);
  };

  const addPostHandler = (event) => {
    event.preventDefault();
    addPost(contentValue);
    changeContentValue("");
  };

  return (
    <div>
      <Form>
        <Form.Group controlId="postContent">
          <Form.Label> Post Content </Form.Label>
          <Form.Control
            name="content"
            type="text"
            value={contentValue}
            onChange={(event) => handleChange(event)}
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          onClick={(event) => addPostHandler(event)}
        >
          Post
        </Button>
      </Form>
    </div>
  );
}

export default PostAddForm;
