import React from 'react'
import '../css/Header.css'
import Topnav from './Topnav';

function Header() {
    return (
        <div className="header">
            <div className="container">
                <div className="header__main">
                    <div className="header__left">
                        <img src="https://www.hulu.com/static/hitch/s3/2020-04/Hulu_Logo-01.png?Q8BjHgJFgQk9_Q2zL_Z_o5fC5u6UcM4K" alt=""/>
                        <Topnav />
                    </div>
                    <div className="header__right">
                        <button>Register for free</button>
                        <p>Log in</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
