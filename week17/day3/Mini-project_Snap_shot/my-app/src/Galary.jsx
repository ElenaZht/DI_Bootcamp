import React, { useEffect, useState } from 'react'
import { createClient } from 'pexels';
import Spinner from './Spinner'

export default function Galary({topic}) {
    const apiKey = import.meta.env.VITE_API_KEY;
    const client = createClient(apiKey);
    const query = topic || 'Mountain'
    
    const [pictures, setPictures] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')



    useEffect(() => {
        setLoading(true)
        setError('')
        client.photos.search({ query, per_page: 20 })
        .then(photos => {
            if (photos.photos.length === 0){
                setLoading(false)
                setError(`nothing was found on topic "${topic}"`)
                return
            }
            setPictures(photos.photos)
            setLoading(false)
        })
        .catch(error => {
            setError('something went wrong, try again later')
            setLoading(false)
        });
    }, [topic])

    return (
        <>
        <h2>{topic} Pictures</h2>
        {error && <h2>{error}</h2>}
        <div className="picturesContainer">
            {!loading && pictures.length && pictures.map((p, i) => {
                return <div className='pictureWrap'><img key={i} src={p.src.original} alt={p.alt} /></div>
            })}
            {loading && <Spinner/>}
        </div>
        </>
    )
}



