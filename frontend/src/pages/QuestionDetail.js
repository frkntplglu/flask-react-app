import React,{useState,useEffect} from 'react'
import { Link,useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import Layout from '../components/Layout'
import Breadcrumb from '../components/Breadcrumb'
import UserCard from '../components/UserCard'
import Loader from '../components/Loader'

function QuestionDetail(props) {
    const [question, setQuestion] = useState([]);
    const { id } = useParams();
    console.log(id)
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`/api/question/${id}`); 
            const data = await response.json();
            setQuestion(data);
        }

        fetchData();
    },[])
    return (
        <Layout>
            <Breadcrumb pageTitle="Question Detail" />
            <div className="container question-page">
                {
                    question.lenght === 0 ? <Loader /> :  <div className="question-card">
                    <div className="question-card-content">
                        <h1><Link to={`soru/${question.id}`}>{question.title}</Link></h1>
                        <div className="question-card-info">
                            <span><FontAwesomeIcon icon={faUser} /> {question.username}</span>
                            <span><FontAwesomeIcon icon={faCalendar} /> {question.created_at}</span>
                        </div>
                        <div className="question-card-summary">
                        {question.question_content}
                        </div>
                        <div className="question-card-tags">
                            {/* {
                                question.tags[0] ? question.tags.map(tag => <a href="#" key={tag.id}>{tag.title}</a>) : ''
                            } */}
                        </div>
                    </div>
                </div>
                }
                <UserCard />
            </div>
        </Layout>
    )
}

export default QuestionDetail
