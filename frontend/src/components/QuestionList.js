import React,{useState, useEffect} from 'react'
import Question from '../components/Question'
import Loader from '../components/Loader'
//import Skeleton from 'react-loading-skeleton';

function QuestionList() {
    const [questions, setQuestions] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("/api/questions"); 
            const data = await response.json();
            setQuestions(data);
        }

        fetchData();
    },[])
    return (
        <div className="question-list">
            <div className="container">
            
            {
                questions.length === 0 ? <Loader /> : questions.map(question => <Question key={question.id} question={question}></Question>)
            } 
            <button className="btn btn-primary load-more">Daha Fazla Yükle</button>
            </div>
        </div>
    )
}

export default QuestionList
