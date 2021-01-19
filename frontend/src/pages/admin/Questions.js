import React, { useEffect, useState } from "react";
import Loader from "../../components/Loader";
import Swal from "sweetalert2";
import axios from "axios";

function Questions() {
  const [questionList, setQuestionList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get("/api/questions").then((response) => {
      setQuestionList(response.data);
    });
  };

  const deleteQuestion = async (id) => {
    axios
      .delete(`/api/question/${id}`)
      .then((response) => {
        Swal.fire({
          title: "Tebrikler...",
          text: "Silme işlemi başarıyla gerçekleştirildi.",
          icon: "success",
        });
      })
      .catch((err) => {
        Swal.fire({
          title: "Ooops...",
          text: "Bir şeyler ters gitti.",
          icon: "error",
        });
      });
    fetchData();
  };
  return (
    <>
      <div className="admin-section">
        <h1>Sorular</h1>
        <ul className="admin-list">
          {questionList.length === 0 ? (
            <Loader />
          ) : (
            questionList.map((question) => (
              <li key={question.id}>
                {question.title}{" "}
                <button
                  className="btn-admin btn-delete"
                  onClick={() => deleteQuestion(question.id)}
                >
                  SİL{" "}
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </>
  );
}

export default Questions;
