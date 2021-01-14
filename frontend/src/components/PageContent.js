import React from 'react'

function PageContent({children}) {
    return (
        <div className="page-content">
            <div className="container">
                {children}
            </div>
        </div>
    )
}

export default PageContent
