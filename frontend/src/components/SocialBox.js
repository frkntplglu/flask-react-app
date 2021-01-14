import React from 'react'

function SocialBox(props) {
    return (
        <div className="social-box" style={{backgroundColor: props.bgColor}}>
            <a href={props.link}>
                <i className={props.icon}></i>
                <div className="social-box-content">
                    <span>Join Us On</span>
                    <p>{props.title}</p>
                </div>
            </a>
        </div>
    )
}

export default SocialBox
