import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/main.scss";

import Home from "./pages/Home";
import StaticPage from "./pages/StaticPage";
import QuestionDetail from "./pages/QuestionDetail";
import PostQuestion from "./pages/PostQuestion";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ErrorPage from "./pages/ErrorPage";
import AdminProfile from "./pages/admin/AdminProfile";
import Profile from "./pages/Profile";
import { QuestionContext } from "./store/store";

function App() {
  return (
    <QuestionContext.Provider value="Furkan">
      <Router>
        <div className="App">
          <Switch>
            <Route path="/profil">
              <Profile />
            </Route>
            <Route path="/admin">
              <AdminProfile />
            </Route>
            <Route path="/sayfa/:id">
              <StaticPage />
            </Route>
            <Route path="/soru-sor">
              <PostQuestion />
            </Route>
            <Route path="/soru/:id">
              <QuestionDetail />
            </Route>
            <Route path="/kayit-ol">
              <Register />
            </Route>
            <Route path="/giris-yap">
              <Login />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="*">
              <ErrorPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </QuestionContext.Provider>
  );
}

export default App;
