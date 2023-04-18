import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <NavLink to="/booklist">BookList</NavLink>
            <NavLink to="/carditem">CardItem</NavLink>
        </div>
    )
}

export default Navbar