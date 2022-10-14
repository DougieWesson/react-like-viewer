function LikeCounter({ likes, increaseLikes, decreaseLikes }) {
  return (
    <>
      <div>
        <p>
          {likes}
          <button onClick={() => increaseLikes()}>Like</button>
          <button onClick={() => decreaseLikes()}>Dislike</button>
        </p>
      </div>
    </>
  );
}

export default LikeCounter;
