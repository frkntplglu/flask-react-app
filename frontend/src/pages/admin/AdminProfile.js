import React,{useState,useEffect} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Layout from '../../components/Layout'
import Breadcrumb from '../../components/Breadcrumb'
import Loader from '../../components/Loader'
import Category from './Category'
import Tag from './Tag'
import Badge from './Badge'
import AuthService from '../../services/auth-service'
import AlertMessage from '../../components/AlertMessage'

function AdminProfile() {
        
    const [category, setCategory] = useState(" ");
    const [categoryList, setCategoryList] = useState([])

    

    const [badge, setBadge] = useState(" ");
    const [badgeList, setBadgeList] = useState([])

    
    useEffect(() => {


        

    },[])

    // const fetchData = async (url,stateWrapper) => {
    //     const response = await fetch(url); 
    //     const data = await response.json();
    //     stateWrapper(data);       
    // }


    




    

    if(!AuthService.getCurrentUser()){
        return (
            <Layout>
                <Breadcrumb pageTitle="Admin Panel" />
                <div className="container">
                <AlertMessage type="danger" message="Hayır birader sen ne ayaksın?" />
                </div>
            </Layout>
        )
    }

    


    return (
        <Router>
            <Layout>
                <Breadcrumb pageTitle="Admin Panel" />
                <div className="container profile-page">
                    <div className="profile-sidebar">
                        <Link to="/admin">Anasayfa</Link>
                        <Link to="/admin/questions">Sorular</Link>
                        <Link to="/admin/category">Kategoriler</Link>
                        <Link to="/admin/tag">Etiketler</Link>
                        <Link to="/admin/badge">Rütbeler</Link>
                        <Link to="/admin/page">Sayfalar</Link>
                        <Link to="/admin/user">Kullanıcılar</Link>

                    </div>
                    <div className="profile-page-content">
                        <Switch>
                            <Route exact path="/admin">
                                Admin home Page
                            </Route>
                            <Route exact path="/admin/questions">
                                <div className="admin-section">
                                    <h1>Sorular</h1>
                                </div>
                            </Route>
                            <Route path="/admin/category">
                                <Category />
                            </Route>
                            <Route path="/admin/tag">
                                <Tag />
                            </Route>
                            <Route path="/admin/badge">
                                <Badge />
                            </Route>
                            <Route path="/admin/page">
                                <div className="admin-section">
                                    <h1>Sayfa Ekle</h1>
                                    <input type="text" placeholder="Sayfa başlığı giriniz"/>
                                    <textarea name="" placeholder="Sayfa içeriğini giriniz" id="" cols="30" rows="10"></textarea>
                                    <button className="btn btn-primary">SAYFA EKLE</button>
                                </div>
                                <div className="admin-section">
                                    <h1>Sayfalar</h1>
                                </div>
                            </Route>
                            <Route path="/admin/user">
                                <div className="admin-section">
                                    <h1>Kullanıcı Ekle</h1>
                                    <input type="text" placeholder="Kullanıcı adı giriniz"/>
                                    <input type="text" placeholder="E-posta giriniz"/>
                                    <input type="password" placeholder="Kullanıcı şifresi giriniz" />
                                    <input type="text" placeholder="Kullanıcı puan giriniz" />
                                    <select name="" id="">
                                        <option value="">Admin</option>
                                        <option value="">Normal Kullanıcı</option>
                                    </select>
                                    <select name="" id="">
                                        <option value="">Rütbe Seçiniz</option>
                                        <option value="">Rookie</option>
                                        <option value="">Supporter</option>
                                        <option value="">Reviewer</option>
                                        <option value="">Doctor</option>
                                        <option value="">Professor</option>
                                    </select>
                                    <button className="btn btn-primary">KULLANICI EKLE</button>
                                </div>
                                <div className="admin-section">
                                    <h1>Kullanıcılar</h1>
                                </div>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </Layout>
        </Router>
    )
}

export default AdminProfile
