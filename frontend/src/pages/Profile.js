import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import Layout from "../components/Layout";
import Breadcrumb from "../components/Breadcrumb";
import jwt_decode from "jwt-decode";

import AuthService from "../services/auth-service";
import AlertMessage from "../components/AlertMessage";
import axios from "axios";
import Swal from "sweetalert2";

function Profile() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const user = JSON.parse(localStorage.getItem("user"));
  const { token } = AuthService.getCurrentUser();
  const decodedToken = jwt_decode(token);
  const userID = decodedToken.identity.id;

  useEffect(() => {
    axios.get(`/api/user/${userID}`).then((response) => {
      setName(response.data.name);
      setUsername(response.data.username);
      setEmail(response.data.email);
    });
  }, []);

  const handleUpdate = (id) => {
    axios
      .put(`/api/user/${userID}`, {
        name: name,
        username: username,
        email: email,
      })
      .then((response) => {
        Swal.fire({
          title: "Tebrikler...",
          text: "Güncelleme işlemi başarıyla gerçekleştirildi.",
          icon: "success",
        });
        console.log(response);
      })
      .catch((err) => {
        Swal.fire({
          title: "Ooops...",
          text: "Bir şeyler ters gitti.",
          icon: "error",
        });
      });
  };
  return (
    <Layout>
      <Breadcrumb pageTitle="Profil" />
      {AuthService.getCurrentUser() ? (
        <div className="container question-page">
          <h1 style={{ margin: "50px", textAlign: "center", width: "100%" }}>
            Hoşgeldin, {user.username}
          </h1>
          <div className="login-box register-box">
            <div className="form-group">
              <p>Ad - Soyad</p>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Kullanıcı adınız"
              />
            </div>
            <div className="form-group">
              <p>Kullanıcı adı</p>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Kullanıcı adınız"
              />
            </div>
            <div className="form-group">
              <p>E-Posta</p>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-Posta Adresiniz"
              />
            </div>

            <button className="btn btn-primary" onClick={handleUpdate}>
              GÜNCELLE
            </button>
          </div>
        </div>
      ) : (
        <div className="container question-page">
          <AlertMessage type="danger" message="Lütfen üye olun..." />
        </div>
      )}
    </Layout>
  );
}

export default Profile;
