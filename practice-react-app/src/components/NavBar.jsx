import React, {useState} from 'react'
import { Link } from 'react-router-dom'

export default function NavBar(){
    return (
        <>
        <nav className="navBar">
            <div className = "navbar-container">
                <Link to="/anotherpage">To AnotherPage</Link>
                <Link style={{marginLeft: "100px"}} to="">Home</Link>
            </div>
        </nav>
        </>
    )
    }

