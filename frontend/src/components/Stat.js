import React from 'react'


function Stat(props) {
    return (
        <div className="stat">
            {props.children}
            <div className="stat-number">{props.number}</div>
            <div className="stat-title">{props.title}</div>
        </div>
    )
}

export default Stat
