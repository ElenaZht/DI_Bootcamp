import { useEffect, useState } from "react"

const Color = () => {
    const [favoriteColor, setFavoriteColor] = useState('red')
    useEffect(() => {
        // alert('useEffect reached')
        setFavoriteColor('yellow')
    }, [])

    const changeColor = () => {
        setFavoriteColor('blue')
    }

    return (
        <>
            <h1>my favourite color is {favoriteColor}</h1>
            <button onClick={changeColor}>change fav col to blue</button>
        </>
    )
}

export default Color