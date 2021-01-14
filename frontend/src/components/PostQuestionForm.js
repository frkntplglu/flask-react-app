import React from 'react'
import AuthService from '../services/auth-service'
import AlertMessage from './AlertMessage'

function PostQuestionForm() {
    if(!AuthService.getCurrentUser()){
        return (
            <div className="post-question">
                <AlertMessage type="warning" message="Soru sorabilmek için üye olmanız gerekmektedir!" />
            </div>
        )
    }
    return (
        <div className="post-question">
            <h1>Soru Sor</h1>
            <div className="post-question-description">
            Duis dapibus aliquam mi, eget euismod sem scelerisque ut. Vivamus at elit quis urna adipiscing iaculis. Curabitur vitae velit in neque dictum blandit. Proin in iaculis neque.
            </div>
            <form action="">
                <div className="form-group">
                    <p>Soru Başlığı</p>
                    <input type="text" className="form-control"/>
                </div>
                <div className="form-group">
                    <p>Soru Başlığı</p>
                    <select name="" id="" className="form-control">
                        <option value="">Bahar Şenliği</option>
                        <option value="">Sosyal Kulüpler</option>
                        <option value="">Ders Seçimi</option>
                    </select>
                </div>
                <div className="form-group">
                    <p>Soru Detayı</p>
                    <textarea className="form-control" name="" id="" cols="30" rows="10"></textarea>
                </div>
                <button className="btn btn-primary">Gönder</button>
            </form>
        </div>
    )
}

export default PostQuestionForm
