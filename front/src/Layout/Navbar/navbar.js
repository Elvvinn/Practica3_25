import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.scss"
function NavbarSection() {
    return (
        <nav className='navsection'>
            <div className='generaldiv'>
                <div className='studiodiv'> <Link className='links' to={"/"}> <h2> Studio </h2> </Link> </div>
                <div className='as'>
                    <Link className='links' to={"/"}> <a> Home </a> </Link>
                    <a> Services </a>
                    <a> Portfolio </a>
                    <Link className='links' to={"/add"}> <a> Add </a> </Link>
                    <a> Team </a>
                    <a> Contact </a>
                </div>
            </div>
        </nav>
    )
}

export default NavbarSection