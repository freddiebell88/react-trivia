import { shuffle } from 'lodash'
import he from 'he'
import { useState } from 'react';

export function Question( {question, correct_answer, incorrect_answers, index, setIndex, selectedAnswer, setSelectedAnswer, complete, setComplete} ) {
    
    const answers = [...incorrect_answers, correct_answer];
    const shuffledAnswers = shuffle(answers)
    const [score, setScore] = useState(0)
    // const [winningScore, setWinningScore] = useState(0)
    
    const handleAnswerSelection = (answer) => {  
        if (answer === correct_answer) {
            setSelectedAnswer("Look at you, that's correct!")
            setScore(score + 1)
            setIndex(index + 1)
        } else if(index === 9) {
            setComplete(true)
        } else {
            setSelectedAnswer('Whoops! Wrong!')
            setIndex(index + 1)
        }
    }
    
    
    
        return(
            <>
            {!complete ? <div>
            <div className='questionCard'>
                <p className='warning'>Choose wisely...you get only one chance...</p>
                <p>{he.decode(question)}</p>
                <div>
                    {shuffledAnswers.map((answer, index) => {
                        return <button onClick={ () => handleAnswerSelection(answer)} key={index}>{he.decode(answer)}</button>
                    })}
                </div>
            </div>
            <div>{selectedAnswer}</div>
            </div>
            :
            <div className='scoreCard'>
                <p>Your score is</p>
                <p className='score'>{score}/10</p>
                <WinOrLose />
            </div>}
            
            </>
        )
    }

export function WinOrLose({score}) {
    const [winningScore, setWinningScore] = useState(8)

    if (score >= winningScore) {
        return (
            <div>You win!</div>
        )
    } else {
        return (
            <div>You lose! Try again!</div>
        )
    }
}