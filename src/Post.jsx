import LikeCounter from "./LikeCounter";

function Post({ content, id, likes, increaseLikes }) {
  return (
    <>
      <div className="post">
        <p>{content}</p>
        <LikeCounter
          id={"like counter" + id}
          likes={likes}
          increaseLikes={() => increaseLikes()}
        />
      </div>
    </>
  );
}

export default Post;
