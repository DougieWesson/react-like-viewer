import "./LikeCounter.css";

function LikeCounter({likes}) {
    return (
        <>
        <div>
            <p>{likes}<button>Like</button></p>
        </div>
        </>
    )
}

export default LikeCounter;