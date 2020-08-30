import React from 'react'
import '../css/Bottomnav.css'

// Import icons from material ui
import HomeIcon from '@material-ui/icons/Home';
import TvIcon from '@material-ui/icons/Tv';
import MovieIcon from '@material-ui/icons/Movie';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import SearchIcon from '@material-ui/icons/Search';

function Bottomnav() {
    return (
        <div className="bottomNav">
            <div className="header__nav">
                            <div className="header__icon header__icon--active">
                                <HomeIcon />
                                <p>Home</p>
                            </div>
                            <div className="header__icon">
                                <FlashOnIcon />
                                <p>Trending</p>
                            </div>
                            <div className="header__icon">
                                <TvIcon />
                                <p>TV Shows</p>
                            </div>
                            <div className="header__icon">
                                <MovieIcon />
                                <p>Movies</p>
                            </div>
                            <div className="header__icon">
                                <SearchIcon />
                                <p>Search</p>
                            </div>                            
                        </div>
        </div>
    )
}

export default Bottomnav
