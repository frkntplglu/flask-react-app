import React, { useState, useEffect } from "react";
import Question from "../components/Question";
import Loader from "../components/Loader";
import axios from "axios";
import AlertMessage from "./AlertMessage";

function QuestionList() {
  const [questions, setQuestions] = useState([]);
  const [loader, setLoader] = useState(true);
  const [message, setMessage] = useState("");
  useEffect(() => {
    axios
      .get("/api/questions")
      .then((response) => {
        setQuestions(response.data);
        setLoader(false);
        if (response.data.length === 0) {
          setMessage("Şimdilik hiç sorumuz yok...");
        }
      })
      .catch((err) => {
        setLoader(false);
        setMessage("Bir şeyler ters gitti..");
      });
  }, []);
  return (
    <div className="question-list">
      <div className="container">
        {loader ? (
          <Loader />
        ) : (
          questions.map((question) => (
            <Question key={question.id} question={question}></Question>
          ))
        )}
        {message ? <AlertMessage type="warning" message={message} /> : null}
      </div>
    </div>
  );
}

export default QuestionList;
