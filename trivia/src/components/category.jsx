

export function CategoryButton ({category, setSelectedCat, categoryId, getCategoryId }) {
    
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