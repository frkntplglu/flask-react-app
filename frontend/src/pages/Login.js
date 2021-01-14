import React,{useState} from 'react'
import { Redirect } from "react-router-dom";
import Layout from '../components/Layout'
import Breadcrumb from '../components/Breadcrumb'
import AlertMessage from '../components/AlertMessage';
import AuthService from '../services/auth-service'

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [result, setResult] = useState({})

    const login = async () => {
        const requestOptions = {
            method: 'POST',
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
               },
            mode: 'cors',
            body: JSON.stringify({ 
                "username": username,
                "password": password
            })
        };
        try{
            const response = await fetch('/api/auth/login', requestOptions);
            const data = await response.json();
            if(response.status === 200){
                localStorage.setItem('user',JSON.stringify(data))

                setResult({
                    type: "success",
                    message: "Giriş başarılı... Anasayfaya gidebilirsiniz.."
                })
                setTimeout(() => {
                    setResult({})
                },1500)
                console.log(data.token)
            }else{
                setResult({
                    type: "danger",
                    message: "Giriş başarısız lütfen tekrar deneyin..."
                })
                setTimeout(() => {
                    setResult({})
                },1500)
            }
            
        }
        catch(err){
            console.log("Hata : ", err)
        }

        setUsername('');
        setPassword('');
    }

    if(AuthService.getCurrentUser()){
        return <Redirect to="/profil" />
    }
    
    return (
        <Layout>
            <Breadcrumb pageTitle="Giriş Yap" />

            <div className="login-box">
            {
                Object.keys(result).length === 0 ? '' : <AlertMessage type={result.type} message={result.message} /> 
            }
                    <div className="form-group">
                        <p>Kullanıcı adı</p>
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Kullanıcı adınız" />
                    </div>
                    <div className="form-group">
                        <p>Şifre</p>
                        <input type="password" value={password}  onChange={(e) => setPassword(e.target.value)} placeholder="Şifreniz" />
                    </div>
                    <a href="">Şifremi Unuttum</a>
                    <button onClick={login} className="btn btn-primary">GİRİŞ YAP</button>
            </div>
        </Layout>
    )
}

export default Login
