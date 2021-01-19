import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import Layout from "../components/Layout";
import Breadcrumb from "../components/Breadcrumb";
import UserCard from "../components/UserCard";
import Loader from "../components/Loader";

function QuestionDetail(props) {
  const [question, setQuestion] = useState([]);

  const [loader, setLoader] = useState(true);
  const [message, setMessage] = useState("");
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    axios
      .get(`/api/question/${id}`)
      .then((response) => {
        console.log("data", response.data);
        setLoader(false);
        setQuestion(response.data);
      })
      .catch((err) => {
        setLoader(false);
        setMessage("Bir şeyler ters gitti. Lütfen daha sonra tekrar dene..");
      });
  }, []);
  return (
    <Layout>
      <Breadcrumb pageTitle={question.title} />
      <div className="container question-page">
        {loader ? (
          <Loader />
        ) : (
          <div className="question-card question-detail-card">
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
              <div className="question-card-summary">
                {question.question_content}
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default QuestionDetail;
