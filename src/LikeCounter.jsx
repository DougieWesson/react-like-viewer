import "./LikeCounter.css";

function LikeCounter({ likes, increaseLikes }) {
    return (
        <>
        <div>
            <p>{likes}<button onClick={() => increaseLikes()}>Like</button></p>
        </div>
        </>
    )
}

export default LikeCounter;