import { Button } from "react-bootstrap";
import LikeCounter from "./LikeCounter";

function Post({ content, id, likes, increaseLikes, removePost }) {
  return (
    <>
      <div className="post">
        <p>{content}</p>
        <LikeCounter
          id={"like counter" + id}
          likes={likes}
          increaseLikes={() => increaseLikes()}
        />
        <Button onClick={() => removePost()}>Remove Post</Button>
      </div>
    </>
  );
}

export default Post;
