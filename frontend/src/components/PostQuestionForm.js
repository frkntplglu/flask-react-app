import axios from "axios";
import React, { useState, useEffect } from "react";
import AuthService from "../services/auth-service";
import Loader from "./Loader";
import Swal from "sweetalert2";
import AlertMessage from "./AlertMessage";
import jwt_decode from "jwt-decode";
import { Redirect } from "react-router-dom";

function PostQuestionForm() {
  const { token } = AuthService.getCurrentUser();
  const decodedToken = jwt_decode(token);
  const userID = decodedToken.identity.id;
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState(0);
  const [categories, setCategories] = useState([]);

  const [loader, setLoader] = useState(false);
  const [message, setMessage] = useState("");
  useEffect(() => {
    axios.get("/api/categories").then((response) => {
      console.log(response.data);
      setCategories(response.data);
    });
  }, []);

  const handleCreate = (e) => {
    e.preventDefault();
    setLoader(true);
    const newQuestion = {
      user_id: userID,
      category_id: category,
      title: title,
      question_content: content,
    };

    axios
      .post("/api/questions", newQuestion)
      .then((response) => {
        console.log(response.data);
        setLoader(false);
        Swal.fire({
          title: "Tebrikler...",
          text:
            "Sorunuzu başarıyla sordunuz. Anasayfaya yönlendiriliyorsunuz...",
          icon: "success",
        });
        window.location.replace("/");
      })
      .catch((err) => {
        setLoader(false);
        setMessage("Bir hata oluştu..");
        console.log(err);
      });
  };

  if (!AuthService.getCurrentUser()) {
    return (
      <div className="post-question">
        <AlertMessage
          type="warning"
          message="Soru sorabilmek için üye olmanız gerekmektedir!"
        />
      </div>
    );
  }
  return (
    <div className="post-question">
      <h1>Soru Sor</h1>
      <div className="post-question-description">
        Bu sayfada merak ettiğin her şeyi sorabilirsin. Bu site senin merakını
        giderebilmek için var.
      </div>
      <form onSubmit={(e) => handleCreate(e)}>
        <div className="form-group">
          <p>Soru Başlığı</p>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <p>Kategori</p>
          <select
            onChange={(e) => setCategory(e.target.value)}
            className="form-control"
          >
            {categories
              ? categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.title}
                  </option>
                ))
              : null}
          </select>
        </div>
        <div className="form-group">
          <p>Soru Detayı</p>
          <textarea
            className="form-control"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            cols="30"
            rows="10"
          ></textarea>
        </div>
        {loader ? (
          <Loader />
        ) : (
          <button className="btn btn-primary">Gönder</button>
        )}
        {message ? <AlertMessage type="danger" message={message} /> : null}
      </form>
    </div>
  );
}

export default PostQuestionForm;
