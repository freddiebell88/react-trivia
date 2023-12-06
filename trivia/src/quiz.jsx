import axios from 'axios'
import {useState, useEffect} from 'react'


export function Quiz({ selectedCat, categoryId, setSelectedCat, question}) {
const [questions, setQuestions] = useState([])
useEffect(() => {
    const quizUrl = `https://opentdb.com/api.php?amount=10&category=${categoryId}&type=multiple`
    axios.get(quizUrl).then((res) => {
        console.log(res.data)
        setQuestions(res.data.results[0])
    })
}, [categoryId])
    return(
        <>
        <h2>{selectedCat}</h2>
        <h2>Quiz</h2>
        <div>
            
                <p>{question}</p>
        </div>
        
        </>
    )
}

// function Question() {
//     return(
//         <>
//         <p>Question</p>
//         <p>Answer Option</p>
//         <p>Answer Option</p>
//         <p>Answer Option</p>
//         <p>Answer Option</p>
//         </>
//     )
// }