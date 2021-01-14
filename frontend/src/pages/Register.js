import React,{useState} from 'react'
import { useHistory } from "react-router-dom";
import Layout from '../components/Layout'
import Breadcrumb from '../components/Breadcrumb'
import AlertMessage from '../components/AlertMessage'

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [isSignedUp, setIsSignedUp] = useState(false);


    const signUp = async () => {
        const requestOptions = {
            method: 'POST',
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
               },
            mode: 'cors',
            body: JSON.stringify({ 
                "username": username,
                "email": email,
                "password": password
            })
        };
        try{
            const response = await fetch('/api/auth/signup', requestOptions);
            if(response.status === 200){
                setIsSignedUp(true)
                setTimeout(() => {
                    setIsSignedUp(false)
                },1500)
            }
            
        }
        catch(err){
            console.log(err)
        }

        setUsername('');
        setEmail('');
        setPassword('');
    }
    return (
        <Layout>
            <Breadcrumb pageTitle="Kayıt Ol" />
            <div className="login-box register-box">
                {isSignedUp ? <AlertMessage type="success" message="Başarıyla kayıt oldunuz. Giriş yapabilirsiniz..." /> : ""}
                <div className="form-group">
                        <p>Kullanıcı adı</p>
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Kullanıcı adınız" />
                    </div>
                    <div className="form-group">
                        <p>E-Posta</p>
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-Posta Adresiniz" />
                    </div>
                    <div className="form-group">
                        <p>Şifre</p>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Şifreniz" />
                    </div>
                    
                    <button className="btn btn-primary" onClick={signUp}>KAYIT OL</button>
            </div>
        </Layout>
    )
}

export default Register
