import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import AuthService from "../services/auth-service";
import logo from "../images/logo.png";
import axios from "axios";
function Header() {
  return (
    <header className="header">
      <div className="header-top">
        <div className="container">
          <ul>
            <li>
              <Link to="/">ANASAYFA</Link>
            </li>
          </ul>
          {AuthService.getCurrentUser() ? (
            <ul>
              <li>
                <Link to="/profil">PROFİL</Link>
              </li>
              <li>
                <a
                  href=""
                  onClick={(e) => {
                    e.preventDefault();
                    AuthService.logout();
                    window.location.reload();
                  }}
                >
                  ÇIKIŞ YAP
                </a>
              </li>
            </ul>
          ) : (
            <ul>
              <li>
                <Link to="/kayit-ol">KAYIT OL</Link>
              </li>
              <li>
                <Link to="/giris-yap">GİRİŞ YAP</Link>
              </li>
            </ul>
          )}
        </div>
      </div>
      <div className="header-middle">
        <div className="container">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className="main-menu">
            <ul>
              <li>
                <Link to="/sayfa/6">HAKKIMIZDA</Link>
              </li>
              <li>
                <Link to="/soru-sor" className="btn">
                  SORU SOR
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
