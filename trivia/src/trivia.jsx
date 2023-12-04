import axios from 'axios'
import { useEffect, useState } from 'react'
import { Quiz } from './quiz'

export function Trivia() {
    const [categories, setCategories] = useState([])
    
    useEffect(() => {
        axios.get('https://opentdb.com/api_category.php').then((res) => setCategories(res.data.trivia_categories))
    }, [])
    return(
        <>
        <h1>TRIVIA!</h1>
        <h2>Categories</h2>
        <div className='categories'>
            {categories.map((category) => (
                <Categories 
                    key={(category.id)}
                    category={category.name}
                />
            ))}
        </div>
        </>
    )
}

const Categories = ({ category }) => {
    return(
        <>
            <button>{category}</button>
        {/* <Quiz /> */}
        </>
    )
}