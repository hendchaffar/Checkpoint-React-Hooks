import React from 'react'
import Rating from './Rating'

function MovieCard({el}) {

    return (
        <div className='movie-card'>
        <h2>{el.title}</h2>
        <Rating RateFilter={el.rate} />
        <img style={{width: "50%"}}src={el.posterUrl} />
        <p>{el.description}</p>
        </div>
    )
}

export default MovieCard
