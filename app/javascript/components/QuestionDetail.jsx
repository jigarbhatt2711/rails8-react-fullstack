import React, { useEffect, useState } from 'react'

const QuestionDetail = ({question}) => {
    const [like, setLike] = useState(question.total_likes)

    // function to like increase
    const likeUp = () => {
        // setLike(like + 1) // don't trust the local state 
        updateLikeApiCall({"count_for": "like"})
    }

    // function to like decrease
    const likeDown = () => {
        // setLike(like - 1) // don't trust the local state 
        updateLikeApiCall({"count_for": "dislike"})
    }

    const updateLikeApiUrl = `http://127.0.0.1:3000/api/v1/questions/${question.id}`
    const updateLikeApiCall = (data) => {
        fetch(updateLikeApiUrl, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => setLike(data.total_likes)) // trust the API response 
        .catch(e => console.log("Error is ",e))
    }

    return (
    <div className="card">
        <div className="card-body">
            <h5 className="card-title">{question.title}</h5>
            <p className="card-text">{question.content}</p>
            <button type="button" className="btn btn-primary" onClick={likeUp}>Like</button><br /><br />
            <button type="button" className="btn btn-primary" onClick={likeDown}>DisLike</button><br /><br />
            {like > 0 ? like : ""}
        </div>
    </div>
  )
}

export default QuestionDetail
