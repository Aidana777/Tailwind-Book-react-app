import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaShoppingBasket } from "react-icons/fa";
import './Navbar.css'
const Navbar = () => {
    return (
        <div className='navbar'>
            <NavLink to="/booklist"style={{ textDecoration: 'none'}} className='link'>BookList</NavLink>
            <NavLink to="/carditem"style={{ textDecoration: 'none'}}className='link'>
                <FaShoppingBasket className='basket' />
            </NavLink>

        </div>
    )
}

export default Navbar