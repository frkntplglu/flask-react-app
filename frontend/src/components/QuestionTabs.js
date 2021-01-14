import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'


function QuestionTabs() {
    return (
        <div className="question-tab container">
            <button><FontAwesomeIcon icon={faBookOpen} /><span>Son Sorular</span></button>
            <button className="active"><FontAwesomeIcon icon={faLayerGroup} /><span>Popüler Sorular</span></button>
            <button><FontAwesomeIcon icon={faLightbulb} /><span>En Son Yanıtlananlar</span></button>
            <button><FontAwesomeIcon icon={faGlobe} /><span>Yanıtlanmayanlar</span></button>
        </div>
    )
}

export default QuestionTabs
