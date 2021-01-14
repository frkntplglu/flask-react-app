import React from 'react'
import logo from '../images/logowhite.png'

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-logo"><img src={logo} alt="İTÜ Soruyor | Arıların Soru Cevap Platformu"/></div>
                <div className="footer-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus illo vel dolorum soluta consectetur doloribus sit. Delectus non tenetur odit dicta vitae debitis suscipit doloribus. Lorem ipsum dolor sit amet, illo vel.</div>
            </div>
            <div className="footer-bottom">Copyright 2020 © Created By <a href="">Furkan Topaloğlu</a> Tüm hakları uzaylılara aittir.</div>
        </footer>
    )
}

export default Footer
