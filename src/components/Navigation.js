import React from 'react'
import '../css/Navigation.css'
import requests from '../requests'

function Navigation({setSelectedOption}) {

    return (
        <div className="navigation container">
            <h3 
            onClick={()=> {setSelectedOption(requests.fetchTrending)}}>
                Trending</h3>
            <h3
            onClick={()=> {setSelectedOption(requests.fetchTopRated)}}>
                Top Rated</h3>
            <h3
            onClick={()=> {setSelectedOption(requests.fetchActionMovies)}}>
                Action</h3>
            <h3
            onClick={()=> {setSelectedOption(requests.fetchComedyMovies)}}>
                Comedy</h3>
            <h3
            onClick={()=> {setSelectedOption(requests.fetchHorrorMovies)}}>
                Horror</h3>
            <h3  
            onClick={()=> {setSelectedOption(requests.fetchRomanceMovies)}}>
                Romance</h3>
            <h3
            onClick={()=> {setSelectedOption(requests.fetchMysteryMovies)}}>
                Mystery</h3>
            <h3
            onClick={()=> {setSelectedOption(requests.fetchSciFiMovies)}}>
                Sci-fi</h3>
            <h3
            onClick={()=> {setSelectedOption(requests.fetchWesternMovies)}}>
                Western</h3>
            <h3 
            onClick={()=> {setSelectedOption(requests.fetchAnimationMovies)}}>
                Animation</h3>
            <h3
            onClick={()=> {setSelectedOption(requests.fetchTVMovies)}}>
                TV Movies</h3>
        </div>
    )
}

export default Navigation
