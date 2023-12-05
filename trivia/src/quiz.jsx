import axios from 'axios'
import {useState, useEffect} from 'react'
import { Trivia } from './trivia'

export function Quiz() {

    return(
        <>
        <h2>Quiz</h2>
        {/* <div>
            {questions.map((question) => (
                {question}
            ))}
        </div> */}
        {/* <Question /> */}
        </>
    )
}

function Question() {
    return(
        <>
        <p>Question</p>
        <p>Answer Option</p>
        <p>Answer Option</p>
        <p>Answer Option</p>
        <p>Answer Option</p>
        </>
    )
}