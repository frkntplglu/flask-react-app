import React from 'react'
import loader from '../images/loader.svg'

function Loader() {
    return (
        <div className="loader">
            <img src={loader} alt="Yükleniyor..."/>
        </div>
    )
}

export default Loader
