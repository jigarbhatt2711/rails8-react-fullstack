import React, { useEffect, useState } from "react";
import QuestionDetail from "./QuestionDetail";

const QuestionList = () => {
	const [questions, setQuestions] = useState([])
	const getQuestionsApiUrl = "http://127.0.0.1:3000/api/v1/questions"

	const fetchQuestions = () => {
		fetch(getQuestionsApiUrl)
		.then(response => response.json())
		.then(data => setQuestions(data))
		.catch(e => console.log("error is ", e));
	}

	useEffect(() => {
		fetchQuestions()
	}, [])

  return (
    <div className="row">
      <div className="card-group">
        {questions.map((question) => (
          <QuestionDetail question={question} key={question.id} />
        ))}
      </div>
    </div>
  );
};

export default QuestionList;
