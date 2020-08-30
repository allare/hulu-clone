import React, { forwardRef } from 'react'
import '../css/Videocard.css'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'


const image_baseURL = "https://image.tmdb.org/t/p/original/"

const Videocard = forwardRef(({ movie }, ref) => {
    return (
        <div className="videoCard" ref={ref}>
            <img src={`${image_baseURL}${movie.backdrop_path || movie.poster_path}`} alt={movie.title}/>
            <div className="videoCard__info">
                <h3>{movie.title}</h3>
                <p>{movie.overview}</p>
                <div className="votes"><ThumbUpIcon /><span> {movie.vote_count}</span></div>
            </div>
        </div>
    )
})

export default Videocard
