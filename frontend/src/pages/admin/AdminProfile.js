import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Swal from "sweetalert2";
import Layout from "../../components/Layout";
import Breadcrumb from "../../components/Breadcrumb";
import Loader from "../../components/Loader";
import Category from "./Category";
import Page from "./Page";
import Badge from "./Badge";
import Questions from "./Questions";
import Users from "./Users";
import AuthService from "../../services/auth-service";
import AlertMessage from "../../components/AlertMessage";

function AdminProfile() {
  useEffect(() => {}, []);

  // const fetchData = async (url,stateWrapper) => {
  //     const response = await fetch(url);
  //     const data = await response.json();
  //     stateWrapper(data);
  // }

  if (!AuthService.getCurrentUser()) {
    return (
      <Layout>
        <Breadcrumb pageTitle="Admin Panel" />
        <div className="container">
          <AlertMessage
            type="danger"
            message="Burası yönetim kurulu giriş yapılamaz"
          />
        </div>
      </Layout>
    );
  }

  return (
    <Router>
      <Layout>
        <Breadcrumb pageTitle="Admin Panel" />
        <div className="container profile-page">
          <div className="profile-sidebar">
            <Link to="/admin">Anasayfa</Link>
            <Link to="/admin/questions">Sorular</Link>
            <Link to="/admin/category">Kategoriler</Link>
            <Link to="/admin/badge">Rütbeler</Link>
            <Link to="/admin/page">Sayfalar</Link>
            <Link to="/admin/user">Kullanıcılar</Link>
          </div>
          <div className="profile-page-content">
            <Switch>
              <Route exact path="/admin">
                <h1 class="text-center">BURASI KURTLAR SOFRASI</h1>
                <iframe
                  width="560"
                  height="315"
                  className="video"
                  src="https://www.youtube.com/embed/YlQ9BT9g0po"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </Route>
              <Route exact path="/admin/questions">
                <Questions />
              </Route>
              <Route path="/admin/category">
                <Category />
              </Route>
              <Route path="/admin/badge">
                <Badge />
              </Route>
              <Route path="/admin/page">
                <Page />
              </Route>
              <Route path="/admin/user">
                <Users />
              </Route>
            </Switch>
          </div>
        </div>
      </Layout>
    </Router>
  );
}

export default AdminProfile;
