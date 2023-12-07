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

function Question( {question, correct_answer, incorrect_answers} ) {

    const answers = [...incorrect_answers, correct_answer];
    const shuffledAnswers = shuffle(answers)
    const [selectedAnswer, setSelectedAnswer] = useState('')
    
    const handleAnswerSelection = (answer) => {
        // answer.preventDefault();
        if (answer === correct_answer) {
            setSelectedAnswer(true)
            console.log('yahoo')
        } else {
            setSelectedAnswer(false)
            console.log('ha yeah right you idiot')
        }
    }

    return(
        <>
        <div className='questionCard'>
            <p>{question}</p>
            <div>
                {shuffledAnswers.map((answer, index) => {
                    return <button onClick={ () => handleAnswerSelection(answer)} key={index}>{answer}</button>
                })}
            </div>
        </div>
        </>
    )
}

// function Answers({ correct_answer, incorrect_answers}) {

//     return(

//     )
// }