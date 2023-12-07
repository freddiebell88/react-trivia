import axios from 'axios'
import {useState, useEffect} from 'react'
import { shuffle } from 'lodash'

export function Quiz({ selectedCat, categoryId }) {

const [questions, setQuestions] = useState([])
const [index, setIndex] = useState(0)
const [loading, setLoading] = useState(true)

useEffect(() => {
    const quizUrl = `https://opentdb.com/api.php?amount=10&category=${categoryId}&type=multiple`
    axios.get(quizUrl).then((res) => {
        setLoading(false)
        console.log(res.data)
        setQuestions(res.data.results)
    })
}, [categoryId])

if (loading) {
    return (
        <h1>LOADING...</h1>
    )
}

const handleNextQuestion = () => {
    setIndex(index + 1)}


    return(
        <>
        <h2>{selectedCat}</h2>
        <h2>Quiz</h2>
        <div>
            <Question
                key={questions[index].id}
                question={questions[index].question}
                correct_answer={questions[index].correct_answer}
                incorrect_answers={questions[index].incorrect_answers}
            />
        </div>
                <button onClick={handleNextQuestion}>Next Question</button>
        
        </>
    )
}

function Question( {question, correct_answer, incorrect_answers, index, setIndex} ) {
    
    const answers = [...incorrect_answers, correct_answer];
    const shuffledAnswers = shuffle(answers)
    const [selectedAnswer, setSelectedAnswer] = useState('')
    
    
    const handleAnswerSelection = (answer) => {  
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