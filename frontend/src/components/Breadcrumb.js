import React from 'react'

function Breadcrumb(props) {
    return (
        <div className="breadcrumb">
            <div className="container">
                <h3>{props.pageTitle}</h3>
                <ul>
                    <li><a href="">Anasayfa</a></li>
                    <li><a href="">{props.pageTitle}</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Breadcrumb
