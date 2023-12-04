import axios from 'axios'
import { useState } from 'react'
import { Quiz } from './quiz'

export function Trivia() {
    return(
        <>
        <h1>TRIVIA!</h1>
        <Categories />
        </>
    )
}

function Categories() {
    // const [categories, setCategoires] = useState([])

    return(
        <>
        <h2>Categories</h2>
        <Quiz />
        </>
    )
}