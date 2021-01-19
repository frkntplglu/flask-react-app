import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

function Question({ question }) {
  return (
    <div className="question-card">
      <div className="question-card-author">
        <img src="https://dummyimage.com/85x85/ddd/000" alt="" />
      </div>
      <div className="question-card-content">
        <h1>
          <Link to={`soru/${question.id}`}>{question.title}</Link>
        </h1>
        <div className="question-card-info">
          <span>
            <FontAwesomeIcon icon={faUser} /> {question.username}
          </span>
          <span>
            <FontAwesomeIcon icon={faCalendar} /> {question.created_at}
          </span>
        </div>
        <div className="question-card-summary">{question.question_content}</div>
      </div>
    </div>
  );
}

export default Question;
