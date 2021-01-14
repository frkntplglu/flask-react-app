import React from 'react'

import Layout from '../components/Layout'
import QuestionTabs from '../components/QuestionTabs'
import QuestionList from '../components/QuestionList'
import QuickAsk from '../components/QuickAsk'
import SiteStats from '../components/SiteStats'

function Home() {

    return (
        <Layout>
            <QuickAsk />
            <QuestionTabs />
            <QuestionList />
            <SiteStats />
        </Layout>
    )
}

export default Home
