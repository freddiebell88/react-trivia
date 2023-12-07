import axios from 'axios'
import {useState, useEffect} from 'react'


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
            
                <Question
                    key={questions.question}
                    question={questions.question}
                    correct_answer={questions.correct_answer}
                    incorrect_answers={questions.incorrect_answers}
                />
            
        </div>
        
        </>
    )
}

function Question( {question, correct_answer, incorrect_answers, index} ) {

    // const answers = [...incorrect_answers, correct_answer];

    
    
    return(
        <>
        <div className='questionCard'>
            <p>{question}</p>
            {/* <div>
                {answers.map((answer) => {
                    return <button key={question}>{answer}</button>
                })}
            </div> */}
            <p>{correct_answer}</p>
            <p>{incorrect_answers}</p>
        </div>
        <button>Next Question</button>
        </>
    )
    
}