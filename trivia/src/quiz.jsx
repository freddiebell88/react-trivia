import axios from 'axios'
import {useState, useEffect} from 'react'


export function Quiz({ selectedCat, categoryId, setSelectedCat, question}) {

// const [index, setIndex] = useState(0)
const [questions, setQuestions] = useState([])
useEffect(() => {
    const quizUrl = `https://opentdb.com/api.php?amount=10&category=${categoryId}&type=multiple`
    axios.get(quizUrl).then((res) => {
        console.log(res.data)
        setQuestions(res.data.results)
    })
}, [categoryId])
    return(
        <>
        <h2>{selectedCat}</h2>
        <h2>Quiz</h2>
        <div>
            {questions.map((question) => (
                <Question 
                    key={question.question}
                    question={question.question}
                    correct_answer={question.correct_answer}
                    incorrect_answers={question.incorrect_answers}
                />
            ))}
        </div>
        
        </>
    )
}

function Question( {question, correct_answer, incorrect_answers}) {
    return(
        <div>
            <p>{question}</p>
            <p>{correct_answer}</p>
            <p>{incorrect_answers}</p>
        </div>
    )
    
}