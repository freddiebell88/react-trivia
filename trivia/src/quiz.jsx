import axios from 'axios'
import {useState, useEffect} from 'react'
import { shuffle } from 'lodash'

export function Quiz({ selectedCat, categoryId }) {

const [questions, setQuestions] = useState([])
const [index, setIndex] = useState(0)

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
            {questions.map((question) =>
                <Question
                    key={question.question}
                    question={question.question}
                    correct_answer={question.correct_answer}
                    incorrect_answers={question.incorrect_answers}
                />
                )}
        </div>
        
        </>
    )
}

function Question( {question, correct_answer, incorrect_answers, index} ) {

    const answers = [...incorrect_answers, correct_answer];
    const shuffledAnswers = shuffle(answers)
    
    
    return(
        <>
        <div className='questionCard'>
            <p>{question}</p>
            <div>
                {shuffledAnswers.map((answer, index) => {
                    return <button key={index}>{answer}</button>
                })}
            </div>
            {/* <p>{correct_answer}</p>
            <p>{incorrect_answers}</p> */}
        </div>
        {/* <button>Next Question</button> */}
        </>
    )
    
}