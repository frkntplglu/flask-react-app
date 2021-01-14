import React from 'react'
import SidebarTitle from './SidebarTitle'

function HotQuestions() {
    return (
        <div className="hot-questions sidebar-box">
            <SidebarTitle title="Popüler Sorular" />
            <ul>
                <li><a href="#">Twitter Bootsrap 3.0 - Tabs-Left Not Working Anymore?</a></li>
                <li><a href="#">Changing The Color On My Tabbed Left Bootstrap3 Tabs</a></li>
                <li><a href="#">How To Create Tabs On The Left In Bootstrap.Js V3.0.0?</a></li>
                <li><a href="#">Bootstrap Horizontal Form With Left Floated Side Tabs</a></li>
                <li><a href="#">A Repository Class - Would You Use It To Handle Multi Records?</a></li>
                <li><a href="#">Realurl Generating Unwanted Language Codes Inside Url</a></li>
                <li><a href="#">Post Data From Html Form To Php Script And Return Result To Ajax/Js/Jquery</a></li>
            </ul>
        </div>
    )
}

export default HotQuestions
