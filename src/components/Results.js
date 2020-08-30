import React, {useState, useEffect} from 'react'
import '../css/Results.css'
import Videocard from './Videocard'
import axios from '../axios'
import FlipMove from 'react-flip-move'

function Results({selectedOption}) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(selectedOption);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [selectedOption]);
    return (
        <div className="container">
            <div className="results">
                <FlipMove>
                {
                    movies.map(movie => (<Videocard movie={movie} key={movie.id}/>))
                }
                </FlipMove>
            </div>
        </div>
    )
}

export default Results
