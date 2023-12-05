import axios from 'axios'
import { useEffect, useState } from 'react'
import { Quiz } from './quiz'

export function Trivia() {
    const [categories, setCategories] = useState([])
    const [selectedCat, setSelectedCat] = useState("")
    
    useEffect(() => {
        axios.get('https://opentdb.com/api_category.php').then((res) => setCategories(res.data.trivia_categories))
    }, [])

    useEffect(() => {
        // axios call to get quiz
        // 
    }, [selectedCat])
    // everytime selectedCat changes it will run this useEffect

    if (selectedCat) {
        return (
            <>
            <h2>{selectedCat}</h2>
            <Quiz />
            </>
        )
    }
    return(
        <>
        <h1>TRIVIA!</h1>
        <h2>Categories</h2>
        <div className='categories'>
            {categories.map((category) => (
                <Categories 
                    key={(category.id)}
                    category={category.name}
                    selectedCat={selectedCat}
                    setSelectedCat={setSelectedCat}
                />
            ))}
        </div>
        </>
    )
}

const Categories = ({ category, setSelectedCat }) => {

    const handleClick = () => {
        setSelectedCat(category);
    }

    return(
        <>
            <button onClick={handleClick}>{category}</button>
        </>
    )
}