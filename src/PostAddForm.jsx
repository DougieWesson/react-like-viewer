import { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

function PostAddForm({ addPost }) {
  const initialPostState = { content: "", tags: "" };

  const [formValues, changeFormValues] = useState(initialPostState);

  const handleChange = (event) => {
    event.preventDefault();
    const newState = { ...formValues };
    newState[event.target.name] = event.target.value;
    changeFormValues(newState);
  };

  const addPostHandler = (event) => {
    event.preventDefault();
    addPost(formValues);
    changeFormValues(initialPostState);
  };

  return (
    <div>
      <Form>
        <Form.Group controlId="postContent">
          <Form.Label className="formLabel"> Post Content </Form.Label>
          <Form.Control
            name="content"
            type="text"
            value={formValues.content}
            onChange={(event) => handleChange(event)}
          />
        </Form.Group>
        {/* <Form.Group controlId="postTags">
          <Form.Label> Post Tags </Form.Label>
          <Form.Control
            name="tags"
            type="text"
            value={formValues.tags}
            onChange={(event) => handleChange(event)}
          />
        </Form.Group> */}
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
