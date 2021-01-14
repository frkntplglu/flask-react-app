import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Layout from '../components/Layout'
import PageContent from '../components/PageContent'
import QuestionList from '../components/QuestionList'
import Sidebar from '../components/Sidebar'


function Questions() {
    return (
        <Layout>
            <Breadcrumb pageTitle="Tüm Sorular" />
            <div className="container question-page">
                <QuestionList />
                <Sidebar />
            </div>
        </Layout>
    )
}

export default Questions
