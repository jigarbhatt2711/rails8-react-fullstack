import React, { useEffect, useState } from "react";
import QuestionDetail from "./QuestionDetail";
import NoSearchFoundMessage from "./NoSearchFoundMessage";
import Loader from "./Loader";

const QuestionList = () => {
  const [questions, setQuestions] = useState([]);
  const getQuestionsApiUrl = "http://127.0.0.1:3000/api/v1/questions";
  const questionsTags = [
    { label: "All", value: 0 },
    { label: "React", value: 1 },
    { label: "Ruby", value: 2 },
    { label: "Rails", value: 3 },
    { label: "Vue", value: 4 },
    { label: "Next", value: 5 },
  ];
  const [selectTag, setSelectTag] = useState(questionsTags[0].value);
  const [isDisplayAlert, setIsDisplayAlert] = useState(false);
  const [isDisplayLoader, setIsDisplayLoader] = useState(false);

  const fetchQuestions = (tagLabel = "All") => {
    setIsDisplayLoader(true);
    const url =
      tagLabel == "All"
        ? getQuestionsApiUrl
        : getQuestionsApiUrl + `?tag=${tagLabel}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setQuestions(data);
        data.length > 0 ? setIsDisplayAlert(false) : setIsDisplayAlert(true);
      })
      .catch((e) => console.log("error is ", e))
      .finally(() => setIsDisplayLoader(false));
  };

  //   on page reload -call questions#index API
  useEffect(() => {
    fetchQuestions();
  }, []);

  //   on change dropdown - call this method
  const updateListing = (tagValue) => {
    setSelectTag(tagValue);
    fetchQuestions(questionsTags[tagValue].label);
  };

  return (
    <>
      {/* filter view */}
      <div className="row">
        <label>Choose a Tag:</label>
        <select
          className="custom-select"
          value={selectTag}
          onChange={(event) => updateListing(event.target.value)}
        >
          {questionsTags.map((tag) => (
            <option key={tag.value} value={tag.value}>
              {tag.label}
            </option>
          ))}
        </select>
      </div>

      {/* display loader */}
      <Loader showLoader={isDisplayLoader} />

      {/* listing view */}
      {questions.length > 0 ? (
        <div className="row mt-5">
          <div className="card-group">
            {questions.map((question) => (
              <QuestionDetail question={question} key={question.id} />
            ))}
          </div>
        </div>
      ) : (
        ""
      )}

      {/* No record found message */}
      {isDisplayAlert && (
        <NoSearchFoundMessage tag={questionsTags[selectTag]} />
      )}
    </>
  );
};

export default QuestionList;
