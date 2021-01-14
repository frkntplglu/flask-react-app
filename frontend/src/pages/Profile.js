import React from 'react'
import { Redirect } from "react-router-dom";
import Layout from '../components/Layout'
import Breadcrumb from '../components/Breadcrumb'
import PostQuestionForm from '../components/PostQuestionForm'
import Sidebar from '../components/Sidebar'
import AuthService from '../services/auth-service'
import AlertMessage from '../components/AlertMessage';

function Profile() {
    const user = JSON.parse(localStorage.getItem('user'))

    return (
        <Layout>
            <Breadcrumb pageTitle="Profil" />
            {
                AuthService.getCurrentUser() ? 
                <div className="container question-page">
                <h1 style={{margin:'50px', textAlign:'center', width: '100%'}}>Hoşgeldin, {user.username}</h1>
            </div> :
            <div className="container question-page">
            <AlertMessage type="danger" message="Haddin olmaya işlere kalkışma!" />
        </div>
            }
        </Layout>
    )
}

export default Profile
