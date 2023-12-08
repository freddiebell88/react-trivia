import axios from 'axios'
import {useState, useEffect} from 'react'
import { shuffle } from 'lodash'
import he from 'he'

export function Quiz({ selectedCat, setSelectedCat, categoryId }) {

    const [questions, setQuestions] = useState([])
    const [index, setIndex] = useState(0)
    const [loading, setLoading] = useState(true)
    const [selectedAnswer, setSelectedAnswer] = useState('')
    const [complete, setComplete] = useState(false)

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
    if (complete) {
        setSelectedCat('')
    } else if (index === 9) {
        setComplete(true)
    } else {
        setIndex(index + 1)
        setSelectedAnswer('')}}


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
                index={index}
                setIndex={setIndex}
                selectedAnswer={selectedAnswer}
                setSelectedAnswer={setSelectedAnswer}
                complete={complete}
                setComplete={setComplete}
            />
        </div>
                <button disabled={!selectedAnswer} onClick={handleNextQuestion}>{complete ? "Play Again" : "Next Question" }</button>
        
        </>
    )
}

function Question( {question, correct_answer, incorrect_answers, index, setIndex, selectedAnswer, setSelectedAnswer, complete, setComplete} ) {
    
const answers = [...incorrect_answers, correct_answer];
const shuffledAnswers = shuffle(answers)
const [score, setScore] = useState(0)

const handleAnswerSelection = (answer) => {  
    if (answer === correct_answer) {
        setSelectedAnswer(true)
        setScore(score + 1)
        // setIndex(index + 1)
        console.log('yahoo')
    } else {
        setSelectedAnswer('wrong')
        // setIndex(index + 1)
        console.log('ha yeah right you idiot')
    }
}


    return(
        <>
        {!complete ? <div>
        <div className='questionCard'>
            <p>{he.decode(question)}</p>
            <div>
                {shuffledAnswers.map((answer, index) => {
                    return <button disabled={selectedAnswer != ''} onClick={ () => handleAnswerSelection(answer)} key={index}>{he.decode(answer)}</button>
                })}
            </div>
        </div>
        <div>{score}</div>
        </div>
        :
        <div className='questionCard'>
            <p>Your score is</p>
            <p>{score}/10</p>
            </div>}
        </>
    )
}

