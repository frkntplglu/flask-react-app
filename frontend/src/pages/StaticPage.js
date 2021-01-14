import React from 'react'
import {
    useParams
  } from "react-router-dom";
import Layout from '../components/Layout'
import Breadcrumb from '../components/Breadcrumb'
import PageContent from '../components/PageContent'

function StaticPage() {
    let { id } = useParams();
    return (
        <Layout>
            <Breadcrumb pageTitle={`${id} numaralı sayfa`} />
            <PageContent>
                <h3>Nasıl Çalışır?</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ex dolor amet. Culpa repellat maiores aliquid ullam? Deserunt iure maxime amet vero. Cupiditate in illum ipsa eos minus vel molestiae?</p>
                <h3>Nasıl Soru Sorarım?</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, mollitia. Fugit, eaque. Placeat, nesciunt sequi. Facilis nisi odit eius recusandae officia ex quaerat, quod, quidem vero laudantium temporibus aliquid aliquam!</p>
                <h3>Nasıl Puan Kazanırım?</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, mollitia. Fugit, eaque. Placeat, nesciunt sequi. Facilis nisi odit eius recusandae officia ex quaerat, quod, quidem vero laudantium temporibus aliquid aliquam!</p>
            </PageContent>
        </Layout>
    )
}

export default StaticPage
