import React from 'react'
import Layout from '../components/Layout'
import Breadcrumb from '../components/Breadcrumb'
import PageContent from '../components/PageContent'

function Contact() {
    return (
        <Layout>
            <Breadcrumb pageTitle="Bize Ulaşın" />
            <PageContent>
                <h3>İletişim</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ex dolor amet. Culpa repellat maiores aliquid ullam? Deserunt iure maxime amet vero. Cupiditate in illum ipsa eos minus vel molestiae?</p>
                <h3>Bize Ulaşın</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, mollitia. Fugit, eaque. Placeat, nesciunt sequi. Facilis nisi odit eius recusandae officia ex quaerat, quod, quidem vero laudantium temporibus aliquid aliquam!</p>
                <h3>Biz Size Ulaşalım</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, mollitia. Fugit, eaque. Placeat, nesciunt sequi. Facilis nisi odit eius recusandae officia ex quaerat, quod, quidem vero laudantium temporibus aliquid aliquam!</p>
            </PageContent>
        </Layout>
    )
}

export default Contact
