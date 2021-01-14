import React from 'react'

function QuickAsk() {
    return (
        <div className="quick-ask">
            <div className="container">
                <h1>NE MERAK EDİYORSUN?</h1>
                <p>Belki de sorun daha önceden cevaplanmıştır. Aşağıdaki formu kullanarak hemen arama yapabilirsin!</p>
                <div className="quick-ask-form">
                    <input className="quick-ask-input" placeholder="Type your search terms here" />
                    <button>ARA</button>
                </div>
            </div>
        </div>
    )
}

export default QuickAsk
