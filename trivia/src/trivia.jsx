import axios from 'axios'
import { useEffect, useState } from 'react'
import { Quiz } from './quiz'

export function Trivia() {
    const [categories, setCategories] = useState([])
    const [selectedCat, setSelectedCat] = useState("")
    const [questions, setQuestions] = useState([])
    const [selectedCategoryId, setSelectedCategoryId] = useState(0)
    
    useEffect(() => {
        axios.get('https://opentdb.com/api_category.php').then((res) => setCategories(res.data.trivia_categories))
    }, [])


    const getCategoryId = (categoryId) => {
        console.log('getCategoryId runs')
        // setSelectedCat(categoryId)
        setSelectedCategoryId(categoryId)
        console.log(categoryId)
    }
    if (selectedCat) {
        return (
            <>
            <button onClick={() => setSelectedCat('')}>Pick a new category</button>
            <Quiz
                key={questions.response_code}
                selectedCat={selectedCat}
                categoryId={selectedCategoryId}
                setSelectedCat={setSelectedCat}
            />
            </>
        )
    }
    return(
        <>
        <h1 className='page-title title'>TRIVIA!</h1>
        <h2 className='title'>Categories</h2>
        <div className='categories'>
            {categories.map((category) => (
                <Category 
                    key={(category.id)}
                    category={category.name}
                    selectedCat={selectedCat}
                    setSelectedCat={setSelectedCat}
                    categoryId={category.id}
                    getCategoryId={getCategoryId}
                    
                    
                />
            ))}
        </div>
        </>
    )
}

const Category = ({ category, setSelectedCat, categoryId, getCategoryId }) => {
    // const [index, setIndex] = useState(0)
    const handleClick = () => {
        setSelectedCat(category);
        getCategoryId(categoryId)
    }

    return(
        <>
            <button onClick={handleClick}>{category}</button>
        </>
    )
}