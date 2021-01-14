import React from 'react'
import Stat from './Stat'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faTrophy } from '@fortawesome/free-solid-svg-icons'
import { faQuestion } from '@fortawesome/free-solid-svg-icons'
import { faHandsHelping } from '@fortawesome/free-solid-svg-icons'

function SiteStats() {
    return (
        <div className="site-stats">
            <div className="container">
                
                <Stat number="356" title="MUTLU KULLANICI">
                    <FontAwesomeIcon icon={faUser} />
                </Stat>
                <Stat number="1342" title="SORULAN SORU">
                    <FontAwesomeIcon icon={faQuestion} />
                </Stat>
                <Stat number="1232" title="VERİLEN CEVAP">
                    <FontAwesomeIcon icon={faHandsHelping} />
                </Stat>
                <Stat number="12" title="FAYDALI CEVAP">
                    <FontAwesomeIcon icon={faTrophy} />
                </Stat>
            </div>
        </div>
    )
}

export default SiteStats
