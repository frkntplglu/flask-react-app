import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import Layout from "../components/Layout";
import Breadcrumb from "../components/Breadcrumb";
import Loader from "../components/Loader";
import AuthService from "../services/auth-service";
import Swal from "sweetalert2";
import jwt_decode from "jwt-decode";

function QuestionDetail(props) {
  const [question, setQuestion] = useState([]);
  const [loader, setLoader] = useState(true);
  const [message, setMessage] = useState("");
  const { token } = AuthService.getCurrentUser();
  const decodedToken = jwt_decode(token);
  const userID = decodedToken.identity.id;
  const { id } = useParams();
  const [answerContent, setAnswerContent] = useState("");
  const [answerList, setAnswerList] = useState([]);

  console.log(id);
  useEffect(() => {
    axios
      .get(`/api/question/${id}`)
      .then((response) => {
        console.log("data", response.data);
        setQuestion(response.data);
        setLoader(false);
        fetchAnswers();
      })
      .catch((err) => {
        setLoader(false);
        setMessage("Bir şeyler ters gitti. Lütfen daha sonra tekrar dene..");
      });
  }, []);

  const fetchAnswers = () => {
    axios.get(`/api/answers/${id}`).then((response) => {
      setAnswerList(response.data);
      console.log("answers", response.data);
    });
  };

  const handleAnswer = () => {
    const newAnswer = {
      user_id: userID,
      question_id: id,
      answer_content: answerContent,
    };
    axios
      .post("/api/answers", newAnswer)
      .then((response) => {
        fetchAnswers();
        Swal.fire({
          title: "Tebrikler...",
          text: "Ekleme işlemi başarıyla gerçekleştirildi.",
          icon: "success",
        });
        setAnswerContent("");
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          title: "Ooops...",
          text: "Bir şeyler ters gitti.",
          icon: "error",
        });
      });
  };

  const handleHelp = (id) => {
    axios
      .put(`/api/answer/helpful/${id}`, { is_helpful: true })
      .then((response) => {
        Swal.fire({
          title: "Tebrikler...",
          text: "Faydalı olarak işaretlediniz.",
          icon: "success",
        });
      })
      .catch((err) => {
        Swal.fire({
          title: "Ooops...",
          text: "Bir hata oluştu",
          icon: "error",
        });
      });
  };

  return (
    <Layout>
      <Breadcrumb pageTitle="Soru Detay" />
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

        <div className="answer-list">
          <h1>CEVAPLAR</h1>
          {answerList && answerList.length !== 0
            ? answerList.map((answer) => (
                <div
                  className="question-card question-detail-card"
                  key={answer.id}
                >
                  {answer.is_helpful ? null : (
                    <div className="question-card-helpful">
                      <FontAwesomeIcon
                        onClick={() => handleHelp(answer.id)}
                        icon={faThumbsUp}
                      />{" "}
                    </div>
                  )}
                  {!answer.is_helpful ? null : (
                    <span className="helpful">FAYDALI :)</span>
                  )}
                  <div className="question-card-content">
                    <div className="question-card-info">
                      <span>
                        <FontAwesomeIcon icon={faUser} /> {answer.username}
                      </span>
                      <span>
                        <FontAwesomeIcon icon={faCalendar} />{" "}
                        {answer.created_at}
                      </span>
                    </div>
                    <div className="question-card-summary">
                      {answer.answer_content}
                    </div>
                  </div>
                </div>
              ))
            : null}
          <div className="answer-form">
            <h3>CEVAPLA</h3>
            <textarea
              value={answerContent}
              onChange={(e) => setAnswerContent(e.target.value)}
              name=""
              id=""
              cols="30"
              className="form-control"
              rows="10"
            ></textarea>
            <button onClick={handleAnswer} className="btn btn-primary">
              CEVAPLA
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default QuestionDetail;
